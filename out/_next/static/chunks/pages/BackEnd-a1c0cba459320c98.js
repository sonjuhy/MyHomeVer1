(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1758],{34434:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/BackEnd",function(){return t(34391)}])},7925:function(e,n,t){"use strict";t.d(n,{CG:function(){return r},TL:function(){return s}});var i=t(45007);let s=i.I0,r=i.v9},34391:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var i=t(85893),s=t(51233),r=t(15861),o=t(23029),l=t(90948),d=t(90629),a=t(67294),c=t(89285),f=t(55534),m=t(7925);let u=(0,l.ZP)(d.Z)(e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}});function g(){let e=(0,m.TL)(),{prefix:n}=(0,a.useContext)(c.ZP),t=(0,m.CG)(e=>e.page.smallMode),l=t?16:32;return(0,a.useEffect)(()=>{let n=()=>{var n;let t=null===(n=document.getElementById("background_container"))||void 0===n?void 0:n.offsetWidth;t&&t<=900?e((0,f.gh)(!0)):e((0,f.gh)(!1))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),(0,i.jsx)("div",{id:"background_container",style:{height:"100%",width:"100%",backgroundColor:"#f4f5ff"},children:(0,i.jsxs)(s.Z,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(r.Z,{style:{fontSize:2*l,textAlign:t?"center":"left",marginTop:"1rem",marginBottom:t?"1rem":"3rem"},children:"\uD83C\uDF10 백엔드 상세 설명"}),(0,i.jsxs)(s.Z,{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"1rem"},children:[(0,i.jsx)(r.Z,{style:{fontSize:t?1.5*l:1.2*l},children:"백엔드 구조도(Python)"}),(0,i.jsx)("div",{style:{display:"flex",width:"70%",justifyContent:"center"},children:(0,i.jsx)("img",{src:"".concat(n,"/image/image/backend.png"),style:{objectFit:"contain",borderRadius:"2rem"}})})]}),(0,i.jsx)(u,{style:{width:"90%",marginBottom:"3rem"},children:(0,i.jsxs)(s.Z,{spacing:2,children:[(0,i.jsx)(r.Z,{style:{fontSize:t?1.3*l:l},children:"IoT 중계 기능"}),(0,i.jsx)(r.Z,{style:{fontSize:t?1.1*l:.8*l},children:"▪ Android ➡ Server"}),(0,i.jsx)(r.Z,{style:{fontSize:t?.9*l:.5*l},children:"▪ 작동 순서"}),(0,i.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"1rem"},children:(0,i.jsx)("div",{style:{display:"flex",width:"70%",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("img",{src:"".concat(n,"/image/image/MQTTFromAndroid.png"),style:{objectFit:"contain",borderRadius:"2rem"}})})}),(0,i.jsx)(r.Z,{variant:"body1",children:"▪ 코드"}),(0,i.jsx)("div",{style:{margin:"1rem",textAlign:"left"},children:(0,i.jsx)(o.dn,{language:"python",showLineNumbers:!0,theme:o.cL,text:'def on_message_fromAndroid(self, client, user_data, msg):\n            self.payload = msg.payload.decode("utf-8")\n            print("from Android message")\n            print(self.payload)\n            if self.payload is not None:\n                if self.payload == \'reserve\':\n                    print("from android if")\n                    if user_data is not None:\n                        self.queue = user_data\n                        self.queue.put("restart")\n                else:\n                    print("from android else")\n                    self.dict = json.JSON_Parser_android(self.payload)\n                    self.on_publish(\'MyHome/Light/Pub/\'+self.dict[\'room\'], self.payload)'})}),(0,i.jsx)(r.Z,{variant:"h6",children:"▪ Switch ➡ Server"}),(0,i.jsx)(r.Z,{variant:"body1",children:"▪ 작동 순서"}),(0,i.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"1rem"},children:(0,i.jsx)("div",{style:{display:"flex",width:"70%",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)("img",{src:"".concat(n,"/image/image/MQTTFromSwitch.png"),style:{objectFit:"contain",borderRadius:"2rem"}})})}),(0,i.jsx)(r.Z,{variant:"body1",children:"▪ 코드"}),(0,i.jsx)("div",{style:{margin:"1rem",textAlign:"left"},children:(0,i.jsx)(o.dn,{text:'    def on_message_fromSwitch(self, client, user_data, msg):\n            self.payload = msg.payload.decode("utf-8")\n            if self.payload is not None and self.payload[0] == "{" and self.payload[-1] == "}":\n                self.dict = json.JSON_Parser(self.payload)\n                if self.dict[\'sender\'] == \'Server\':  # return control data part\n                    if self.dict[\'room\'] in self.Room:\n                        self.Room[self.dict[\'room\']] = "On"\n                        network.SQL_Def("Light", self.dict)\n                        #print("room : " + self.dict[\'room\'])\n                        if self.dict[\'room\'] == \'small Room\':\n                            for (room, state) in self.Room.items():\n                                self.diction = [(\'message\', state), (\'room\', room)]\n                                network.SQL_Def("Connect", self.diction)\n                                self.Room[room] = "Off"\n                else:  # Light state part\n                    network.SQL_Def("LightRecord", self.dict)\n                    network.SQL_Def("Light", self.dict)\n                    self.diction = json.JSON_ENCODE(self.dict)\n                    self.on_publish(\'MyHome/Light/Result\', self.diction)\n            else:\n                print("can\'t work in on_message")\n                print(self.payload)',language:"python",showLineNumbers:!0,theme:o.cL})})]})})]})})}}},function(e){e.O(0,[4939,2888,9774,179],function(){return e(e.s=34434)}),_N_E=e.O()}]);