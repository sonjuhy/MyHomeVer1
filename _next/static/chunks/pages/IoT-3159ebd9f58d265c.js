(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9409],{36049:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/IoT",function(){return t(62983)}])},7925:function(e,n,t){"use strict";t.d(n,{CG:function(){return r},TL:function(){return s}});var i=t(45007);let s=i.I0,r=i.v9},62983:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var i=t(85893),s=t(51233),r=t(15861),l=t(86886),o=t(66242),c=t(44267),d=t(23029),a=t(90948),m=t(90629),h=t(67294),g=t(89285),f=t(55534),u=t(7925);let x=(0,a.ZP)(m.Z)(e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}}),y=(0,a.ZP)(m.Z)(e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(3),color:n.palette.text.secondary}});function j(){let e=(0,u.TL)(),{prefix:n}=(0,h.useContext)(g.ZP),t=(0,u.CG)(e=>e.page.smallMode),a=t?16:32;return(0,h.useEffect)(()=>{let n=()=>{var n;let t=null===(n=document.getElementById("iot_container"))||void 0===n?void 0:n.offsetWidth;t&&t<=900?e((0,f.gh)(!0)):e((0,f.gh)(!1))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),(0,i.jsx)("div",{id:"iot_container",style:{height:"100%",width:"100%",backgroundColor:"#f4f5ff"},children:(0,i.jsxs)(s.Z,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(r.Z,{style:{fontSize:2*a,textAlign:t?"center":"left",marginTop:"1rem",marginBottom:t?"1rem":"3rem"},children:"\uD83C\uDF10 IoT 상세 설명"}),(0,i.jsxs)(s.Z,{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"1rem"},children:[(0,i.jsx)(r.Z,{style:{fontSize:t?1.5*a:1.2*a},children:"IoT 펌웨어 구조도(ESP8266)"}),(0,i.jsx)("div",{style:{display:"flex",width:"70%",justifyContent:"center"},children:(0,i.jsx)("img",{src:"".concat(n,"/image/image/ESP8266Sequence.png"),style:{objectFit:"contain",borderRadius:"2rem"}})})]}),(0,i.jsxs)(x,{style:{width:"90%",marginBottom:"3rem"},children:[(0,i.jsxs)(s.Z,{spacing:2,children:[(0,i.jsxs)(y,{variant:"outlined",elevation:6,children:[(0,i.jsx)(r.Z,{style:{fontWeight:"bold",fontSize:t?1.3*a:a},children:"목표"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(r.Z,{style:{textAlign:"left",marginLeft:t?.8*a:a,fontSize:t?1.1*a:.8*a},children:"1. MQTT 제어"}),(0,i.jsxs)(r.Z,{style:{textAlign:"left",marginLeft:1.5*a,fontSize:t?.9*a:.5*a},children:[(0,i.jsx)("li",{children:"On&Off 제어 / 상태 확인 목적으로 들어오는 MQTT 메세지 처리."}),(0,i.jsx)("li",{children:"정형화 된 JSON 타입으로 데이터 전송 및 처리."}),(0,i.jsx)("li",{children:"실시간 요청 처리"})]}),(0,i.jsx)("br",{}),(0,i.jsx)(r.Z,{style:{textAlign:"left",marginLeft:t?.8*a:a,fontSize:t?1.1*a:.8*a},children:"2. 서버와의 연결을 유지"}),(0,i.jsxs)(r.Z,{style:{textAlign:"left",marginLeft:1.5*a,fontSize:t?.9*a:.5*a},children:[(0,i.jsx)("li",{children:"서버와의 연결을 항시 유지."}),(0,i.jsx)("li",{children:"만약 연결이 끊겼을 경우 재연결 시도."})]}),(0,i.jsx)("br",{})]})]}),(0,i.jsx)(r.Z,{style:{fontSize:t?1.3*a:a},children:"Button 컨트롤"}),(0,i.jsx)(r.Z,{style:{fontSize:t?1.1*a:.8*a},children:"▪ Button Handler"}),(0,i.jsx)(r.Z,{style:{fontSize:t?.9*a:.5*a},children:"▪ 작동 순서"}),(0,i.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"1rem"},children:(0,i.jsx)("div",{style:{display:"flex",width:"70%",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("img",{src:"".concat(n,"/image/image/ESP8266Sequence.png"),style:{objectFit:"contain",borderRadius:"2rem"}})})}),(0,i.jsx)(r.Z,{variant:"body1",children:"▪ 코드"}),(0,i.jsx)("div",{style:{margin:"1rem",textAlign:"left"},children:(0,i.jsx)(d.dn,{language:"c++",showLineNumbers:!0,theme:d.cL,text:'/* Read and handle button Press*/\nvoid getButton(void) {\n// short press butoon to change state of relay\nif (digitalRead(BUTTONPIN) == false ) {\n    ++ButtonCount;\n    }\nif (digitalRead(BUTTONPIN) == false && ButtonCount > 1 && ButtonCount < 12 ) {\n    Serial.println(RelayState);\n    if(RelayState==false){\n        client.publish(mqtt_topic,"{"sender":"self","message":"On","room":"test room"}"); \n    }\n    else{\n        client.publish(mqtt_topic,"{"sender":"self","message":"Off","room":"test room"}");\n    }\n    ButtonCount = 0;\n    delay(500);\n}\n/* long press button restart */\nif (ButtonCount > 12) {\n    setLED(!LEDState);\n    buttonTick.detach();    // Stop Tickers\n    /* Wait for release button */\n    while (!digitalRead(BUTTONPIN)) yield();\n    delay(100);\n    ESP.restart();\n}\nif (digitalRead(BUTTONPIN) == true) ButtonCount = 0;\nButtonFlag = false;\n}'})})]}),(0,i.jsxs)(s.Z,{spacing:2,children:[(0,i.jsx)(r.Z,{style:{fontSize:t?1.3*a:a},children:"MQTT"}),(0,i.jsx)(r.Z,{style:{fontSize:t?1.1*a:.8*a},children:"▪ MQTT Connection"}),(0,i.jsx)(r.Z,{style:{fontSize:t?.9*a:.5*a},children:"▪ 작동 순서"}),(0,i.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"1rem"},children:(0,i.jsx)("div",{style:{display:"flex",width:"70%",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("img",{src:"".concat(n,"/image/image/ESP8266Connection.png"),style:{objectFit:"contain",borderRadius:"2rem"}})})}),(0,i.jsx)(r.Z,{variant:"body1",children:"▪ 코드"}),(0,i.jsx)("div",{style:{margin:"1rem",textAlign:"left"},children:(0,i.jsx)(d.dn,{language:"c++",showLineNumbers:!0,theme:d.cL,text:'void reconnect() {\n    // Loop until we\'re reconnected\n    Serial.print("Attempting MQTT connection...");\n    // Attempt to connect\n    if (client.connect(mqtt_id)) { //change to ClientID\n        Serial.println("connected");\n            \n        // ... and resubscribe\n        client.subscribe(mqtt_topic_sub);\n\n        // Once connected, publish an announcement...\n        client.publish(mqtt_topic_con, "{"sender":"self","message":"reconneted","room":"test room"}");\n    } \n    else {\n        Serial.print("failed, rc=");\n        Serial.println(client.state());\n    }\n\n}'})}),(0,i.jsx)(r.Z,{style:{fontSize:t?1.1*a:.8*a},children:"▪ MQTT Callback(Listener)"}),(0,i.jsx)(r.Z,{style:{fontSize:t?.9*a:.5*a},children:"▪ 작동 순서"}),(0,i.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"1rem"},children:(0,i.jsx)("div",{style:{display:"flex",width:"70%",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("img",{src:"".concat(n,"/image/image/ESP8266CallBack.png"),style:{objectFit:"contain",borderRadius:"2rem"}})})}),(0,i.jsx)(r.Z,{variant:"body1",children:"▪ 코드"}),(0,i.jsx)("div",{style:{margin:"1rem",textAlign:"left"},children:(0,i.jsx)(d.dn,{language:"c++",showLineNumbers:!0,theme:d.cL,text:'void callback(char* topic, byte* payload, unsigned int length) {\n        String Msg = "";\n        int i=0;\n        while (i<length) Msg += (char)payload[i++];\n        \n        StaticJsonDocument<256> doc;\n        DeserializationError error = deserializeJson(doc, Msg.c_str(), length);\n        \n        if (error) {\n            Serial.print(F("deserializeJson() failed: "));\n            Serial.println(error.c_str());\n            char error_put[64];\n            StaticJsonDocument<64> doc;\n            doc["sender"] = "self";\n            doc["message"] = error.c_str();\n            doc["room"] = mqtt_id;\n            client.publish(mqtt_topic, error_put);\n            return;\n        }\n        \n        const char* sender = doc["Light"]["sender"];\n        const char* message = doc["Light"]["message"];\n        const char* destination = doc["Light"]["destination"];\n        String message_str = message;\n        String destination_str = destination;\n        \n        if(message_str.equals("ON")){\n            if(RelayState == true){\n            mqtt_publish("already On", sender);\n            }\n            else{\n            setRelay(!RelayState);\n            mqtt_publish("On", sender);\n            }\n        }\n        else if(message_str.equals("STATE")){\n            if(RelayState == true){\n            mqtt_publish("On", sender);\n            }\n            else{\n            mqtt_publish("Off", sender);\n            }\n        }\n        else{\n            if(message_str.equals("OFF")){\n                if(RelayState == true){\n                    setRelay(!RelayState);\n                    mqtt_publish("Off", sender);\n                }\n                else{\n                    mqtt_publish("already Off", sender);\n                }\n            }\n        }\n    } '})})]})]}),(0,i.jsxs)(x,{style:{width:"90%",marginBottom:"3rem"},children:[(0,i.jsx)(r.Z,{style:{fontWeight:"bold",fontSize:t?1.3*a:a,marginBottom:a},children:"발생한 문제 및 해결 방법"}),(0,i.jsxs)(s.Z,{spacing:2,children:[(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:5,lg:5,children:(0,i.jsx)(o.Z,{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(r.Z,{variant:"body2",children:"펌웨어를 스위치 설치 이후에도 업데이트가 가능해야 하기에 , 무선으로 업데이트 할 수 있어야 함."})})})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:2,lg:2,style:{justifyContent:"center",alignItems:"center",display:"flex"},children:(0,i.jsx)(r.Z,{children:t?"⬇":"➡"})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:5,lg:5,children:(0,i.jsx)(o.Z,{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(r.Z,{variant:"body2",children:"Http Server를 이용한 펌웨어 업데이트 기능을 지원. 안정성을 위해 로그인 이후 가능하도록 설정."})})})})]}),t&&(0,i.jsx)("hr",{}),(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:5,lg:5,children:(0,i.jsx)(o.Z,{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(r.Z,{variant:"body2",children:"서버와 연결이 종료되어도 다시 연결을 시도하여야 함."})})})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:2,lg:2,style:{justifyContent:"center",alignItems:"center",display:"flex"},children:(0,i.jsx)(r.Z,{children:t?"⬇":"➡"})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:5,lg:5,children:(0,i.jsx)(o.Z,{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(r.Z,{variant:"body2",children:"스위치의 loop()에 지속적으로 연결상태를 확인 후, 연결이 끊어진 경우 다시 재연결 시도."})})})})]})]})]})]})})}}},function(e){e.O(0,[4991,1380,2888,9774,179],function(){return e(e.s=36049)}),_N_E=e.O()}]);