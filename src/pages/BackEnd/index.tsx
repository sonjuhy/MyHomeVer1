import { Button, Stack, Typography } from "@mui/material";
import { CodeBlock, dracula } from "react-code-blocks";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  /**
   * 구조도
   * 작동 시퀀스
   * 기능 1,2,3...
   * 해당 코드
   * 작성 이유 (문제가 있을 경우 어떤 경우로 해결했는지)
   * */
  const code = `class HelloWorld {
    static public void main( String args[] ) {
      System.out.println( "Hello World!" );
    }
  }`;
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f5ff",
      }}
    >
      <Stack style={{ margin: "5rem" }}>
        <Typography variant="h2" style={{ marginBottom: "3rem" }}>
          🌐 백엔드 상세 설명
        </Typography>
        <Stack
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h4">백엔드 구조도(Python)</Typography>
          <div
            style={{
              display: "flex",
              width: "70%",
              justifyContent: "center",
            }}
          >
            <img
              src="/image/image/backend.png"
              style={{ objectFit: "contain", borderRadius: "2rem" }}
            />
          </div>
        </Stack>

        <Item style={{ marginBottom: "3rem" }}>
          <Typography variant="h4">IoT 중계 기능</Typography>
          <Typography variant="h6">▪ Android ➡ Server</Typography>
          <Typography variant="body1">▪ 작동 순서</Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/image/image/MQTTFromAndroid.png"
                style={{ objectFit: "contain", borderRadius: "2rem" }}
              />
            </div>
          </div>

          <Typography variant="body1">▪ 코드</Typography>
          <div style={{ margin: "1rem", textAlign: "left" }}>
            <CodeBlock
              text={`    def on_message_fromAndroid(self, client, user_data, msg):
            self.payload = msg.payload.decode("utf-8")
            print("from Android message")
            print(self.payload)
            if self.payload is not None:
                if self.payload == 'reserve':
                    print("from android if")
                    if user_data is not None:
                        self.queue = user_data
                        self.queue.put("restart")
                else:
                    print("from android else")
                    self.dict = json.JSON_Parser_android(self.payload)
                    self.on_publish('MyHome/Light/Pub/'+self.dict['room'], self.payload)`}
              language={"python"}
              showLineNumbers={true}
              theme={dracula}
            />
          </div>
          <Typography variant="h6">▪ Switch ➡ Server</Typography>
          <Typography variant="body1">▪ 작동 순서</Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/image/image/MQTTFromSwitch.png"
                style={{ objectFit: "contain", borderRadius: "2rem" }}
              />
            </div>
          </div>

          <Typography variant="body1">▪ 코드</Typography>
          <div style={{ margin: "1rem", textAlign: "left" }}>
            <CodeBlock
              text={`    def on_message_fromSwitch(self, client, user_data, msg):
            self.payload = msg.payload.decode("utf-8")
            if self.payload is not None and self.payload[0] == "{" and self.payload[-1] == "}":
                self.dict = json.JSON_Parser(self.payload)
                if self.dict['sender'] == 'Server':  # return control data part
                    if self.dict['room'] in self.Room:
                        self.Room[self.dict['room']] = "On"
                        network.SQL_Def("Light", self.dict)
                        #print("room : " + self.dict['room'])
                        if self.dict['room'] == 'small Room':
                            for (room, state) in self.Room.items():
                                self.diction = [('message', state), ('room', room)]
                                network.SQL_Def("Connect", self.diction)
                                self.Room[room] = "Off"
                else:  # Light state part
                    network.SQL_Def("LightRecord", self.dict)
                    network.SQL_Def("Light", self.dict)
                    self.diction = json.JSON_ENCODE(self.dict)
                    self.on_publish('MyHome/Light/Result', self.diction)
            else:
                print("can't work in on_message")
                print(self.payload)`}
              language={"python"}
              showLineNumbers={true}
              theme={dracula}
            />
          </div>
        </Item>

        {/* <Item style={{ marginBottom: "3rem" }}>
          <Typography variant="h4">예약 기능</Typography>
          <div style={{ margin: "1rem", textAlign: "left"  }}>
            <CodeBlock
              text={code}
              language={"java"}
              showLineNumbers={true}
              theme={dracula}
            />
          </div>
        </Item> */}
      </Stack>
    </div>
  );
}
