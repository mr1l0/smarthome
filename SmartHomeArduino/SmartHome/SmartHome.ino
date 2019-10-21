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

void execute(EthernetClient client) {            
  if (readString.indexOf("?1-") > 0) {    
    executeIt(client, 1, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?2-") > 0) {    
    executeIt(client, 2, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?3-") > 0) {    
    executeIt(client, 3, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?4-") > 0) {    
    executeIt(client, 4, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?5-") > 0) {    
    executeIt(client, 5, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?6-") > 0) {    
    executeIt(client, 6, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?7-") > 0) {    
    executeIt(client, 7, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?8-") > 0) {    
    executeIt(client, 8, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?9-") > 0) {    
    executeIt(client, 9, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  } 
  if (readString.indexOf("?10-") > 0) {    
    executeIt(client, 10, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  }
  if (readString.indexOf("?11-") > 0) {    
    executeIt(client, 11, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  }
  if (readString.indexOf("?12-") > 0) {    
    executeIt(client, 12, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);
  }
  if (readString.indexOf("?13-") > 0) {    
    executeIt(client, 13, readString.indexOf("&HIGH") > 0, readString.indexOf("&READ") > 0);  
  }
}

void executeIt(EthernetClient client, int num, bool operation, bool readIt) {
  JsonObject obj = doc.to<JsonObject>();      
  if (readIt) {
    obj["value"] = digitalRead(num);
  } else if (operation) {
    Serial.println("high");              
    digitalWrite(num, HIGH);    
    obj["value"] = 1;
  } else {
    Serial.println("low");              
    digitalWrite(num, LOW);                  
    obj["value"] = 0;
  }
  char output[128];       
  serializeJson(doc, output);
  client.println(output);                         
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
          client.println("HTTP/1.1 200 OK");
          client.println("Access-Control-Allow-Origin: *");
          client.println("Access-Control-Allow-Headers: *");
          client.println("Content-Type: application/json");                   
          client.println();
          
          execute(client);
          readString= "";         
                    
          delay(1);
          client.stop();            
        }
      }
    }
  }
  
}
