#include <ArduinoJson.h>

#include <SPI.h>
#include <SD.h>
#include <Ethernet.h>
//Define o Mac Address da placa de rede. Essa informação pode ser encontrada em uma etiqueta colada embaixo da mesma.
byte mac[] = { 0x90, 0xA2, 0xDA, 0x0E, 0xA1, 0x5C };
//Define o IP da placa. Caso necessário altere o mesmo para se adequar a sua rede.
IPAddress ip(192, 168, 0, 130);

EthernetServer server(80);
File webFile;

//#define REQ_BUF_SZ   60
//char HTTP_req[REQ_BUF_SZ] = {0};
//char req_index = 0;
String readString;

const size_t CAPACITY = JSON_OBJECT_SIZE(1);
StaticJsonDocument<CAPACITY> doc;

void setup()
{
  Serial.begin(9600);
  pinMode(6, INPUT);
  //pinMode(13, OUTPUT);  
  Ethernet.begin(mac, ip);
  server.begin();
}

// funcao para limpar arrays (no nosso caso, as variaveis que armazenam requests)
void StrClear(char *str, char length)
{
  for (int i = 0; i < length; i++) {
    str[i] = 0;
  }
}

void execute() {            
  if (readString.indexOf("?6") > 0) {    
    if (readString.indexOf("&HIGH") > 0) {
      Serial.println("high");              
      digitalWrite(6, HIGH);
    } else {
      Serial.println("low");              
      digitalWrite(6, LOW);              
    };       
  }  
}

void loop()
{
  EthernetClient client = server.available();
  if (client) {
    while (client.connected()) {
      if (client.available()) {
        //Serial.println("Conectado!");
        char c = client.read();
        if (readString.length() < 100) {
          readString += c;
        }
        if (c == 'n') {
          //Serial.println(readString);
          
          execute();
          
          readString= "";         
          client.println("HTTP/1.1 200 OK");
          client.println("Access-Control-Allow-Origin: *");
          client.println("Access-Control-Allow-Headers: *");
          client.println("Content-Type: application/json");                   
          client.println();
          
          JsonObject obj = doc.to<JsonObject>();      
          obj["value"] = 100;   
          char output[128];       
          serializeJson(doc, output);
          client.println(output);
                    
          delay(1);
          client.stop();            
        }
      }
    }
  }
  
}
