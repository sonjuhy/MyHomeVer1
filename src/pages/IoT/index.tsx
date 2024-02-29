import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { CodeBlock, dracula } from "react-code-blocks";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useContext, useEffect } from "react";
import PortfolioContext from "../../../context/context";

import { changeSmallMode } from "../../../context/redux/feature/pageSize/pageSlice";
import { useAppDispatch, useAppSelector } from "../../../context/redux/hooks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SubItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const dispatch = useAppDispatch();
  const { prefix }: any = useContext(PortfolioContext);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const fontSize = smallMode ? 16 : 32;

  useEffect(() => {
    const handleResize = () => {
      // 컨테이너의 너비를 감지하여 글자 크기 동적 조절
      const containerWidth =
        document.getElementById("iot_container")?.offsetWidth;

      // 예시: 너비가 200px 이하일 때 글자 크기를 14로, 그 외에는 16으로 설정
      if (containerWidth && containerWidth <= 900) {
        dispatch(changeSmallMode(true));
      } else {
        dispatch(changeSmallMode(false));
      }
    };

    // 초기 로드 시와 창 크기 변경 시에 이벤트 리스너 등록
    handleResize();
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="iot_container"
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#f4f5ff",
      }}
    >
      <Stack
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontSize: fontSize * 2,
            textAlign: smallMode ? "center" : "left",
            marginTop: "1rem",
            marginBottom: smallMode ? "1rem" : "3rem",
          }}
        >
          🌐 IoT 상세 설명
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
          <Typography
            style={{ fontSize: smallMode ? fontSize * 1.5 : fontSize * 1.2 }}
          >
            IoT 펌웨어 구조도(ESP8266)
          </Typography>
          <div
            style={{
              display: "flex",
              width: "70%",
              justifyContent: "center",
            }}
          >
            <img
              src={`${prefix}/image/image/ESP8266Sequence.png`}
              style={{ objectFit: "contain", borderRadius: "2rem" }}
            />
          </div>
        </Stack>
        <Item
          style={{
            width: "90%",
            marginBottom: "3rem",
          }}
        >
          <Stack spacing={2}>
            <SubItem variant="outlined" elevation={6}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: smallMode ? fontSize * 1.3 : fontSize,
                }}
              >
                목표
              </Typography>

              <div>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: smallMode ? fontSize * 0.8 : fontSize,
                    fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8,
                  }}
                >
                  1. MQTT 제어
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: fontSize * 1.5,
                    fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5,
                  }}
                >
                  <li>
                    On&Off 제어 / 상태 확인 목적으로 들어오는 MQTT 메세지 처리.
                  </li>
                  <li>정형화 된 JSON 타입으로 데이터 전송 및 처리.</li>
                  <li>실시간 요청 처리</li>
                </Typography>
                <br />
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: smallMode ? fontSize * 0.8 : fontSize,
                    fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8,
                  }}
                >
                  2. 서버와의 연결을 유지
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: fontSize * 1.5,
                    fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5,
                  }}
                >
                  <li>서버와의 연결을 항시 유지.</li>
                  <li>만약 연결이 끊겼을 경우 재연결 시도.</li>
                </Typography>
                <br />
              </div>
            </SubItem>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.3 : fontSize }}
            >
              Button 컨트롤
            </Typography>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8 }}
            >
              ▪ Button Handler
            </Typography>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5 }}
            >
              ▪ 작동 순서
            </Typography>
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
                  src={`${prefix}/image/image/ESP8266Sequence.png`}
                  style={{ objectFit: "contain", borderRadius: "2rem" }}
                />
              </div>
            </div>

            <Typography variant="body1">▪ 코드</Typography>
            <div
              style={{
                margin: "1rem",
                // width: "50%",
                textAlign: "left",
              }}
            >
              <CodeBlock
                language={"c++"}
                showLineNumbers={true}
                theme={dracula}
                text={`/* Read and handle button Press*/
void getButton(void) {
// short press butoon to change state of relay
if (digitalRead(BUTTONPIN) == false ) {
    ++ButtonCount;
    }
if (digitalRead(BUTTONPIN) == false && ButtonCount > 1 && ButtonCount < 12 ) {
    Serial.println(RelayState);
    if(RelayState==false){
        client.publish(mqtt_topic,"{\"sender\":\"self\",\"message\":\"On\",\"room\":\"test room\"}"); 
    }
    else{
        client.publish(mqtt_topic,"{\"sender\":\"self\",\"message\":\"Off\",\"room\":\"test room\"}");
    }
    ButtonCount = 0;
    delay(500);
}
/* long press button restart */
if (ButtonCount > 12) {
    setLED(!LEDState);
    buttonTick.detach();    // Stop Tickers
    /* Wait for release button */
    while (!digitalRead(BUTTONPIN)) yield();
    delay(100);
    ESP.restart();
}
if (digitalRead(BUTTONPIN) == true) ButtonCount = 0;
ButtonFlag = false;
}`}
              />
            </div>
          </Stack>
          <Stack spacing={2}>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.3 : fontSize }}
            >
              MQTT
            </Typography>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8 }}
            >
              ▪ MQTT Connection
            </Typography>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5 }}
            >
              ▪ 작동 순서
            </Typography>
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
                  src={`${prefix}/image/image/ESP8266Connection.png`}
                  style={{ objectFit: "contain", borderRadius: "2rem" }}
                />
              </div>
            </div>

            <Typography variant="body1">▪ 코드</Typography>
            <div
              style={{
                margin: "1rem",
                // width: "50%",
                textAlign: "left",
              }}
            >
              <CodeBlock
                language={"c++"}
                showLineNumbers={true}
                theme={dracula}
                text={`void reconnect() {
    // Loop until we're reconnected
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect(mqtt_id)) { //change to ClientID
        Serial.println("connected");
            
        // ... and resubscribe
        client.subscribe(mqtt_topic_sub);

        // Once connected, publish an announcement...
        client.publish(mqtt_topic_con, "{\"sender\":\"self\",\"message\":\"reconneted\",\"room\":\"test room\"}");
    } 
    else {
        Serial.print("failed, rc=");
        Serial.println(client.state());
    }

}`}
              />
            </div>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8 }}
            >
              ▪ MQTT Callback(Listener)
            </Typography>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5 }}
            >
              ▪ 작동 순서
            </Typography>
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
                  src={`${prefix}/image/image/ESP8266CallBack.png`}
                  style={{ objectFit: "contain", borderRadius: "2rem" }}
                />
              </div>
            </div>

            <Typography variant="body1">▪ 코드</Typography>
            <div
              style={{
                margin: "1rem",
                // width: "50%",
                textAlign: "left",
              }}
            >
              <CodeBlock
                language={"c++"}
                showLineNumbers={true}
                theme={dracula}
                text={`void callback(char* topic, byte* payload, unsigned int length) {
        String Msg = "";
        int i=0;
        while (i<length) Msg += (char)payload[i++];
        
        StaticJsonDocument<256> doc;
        DeserializationError error = deserializeJson(doc, Msg.c_str(), length);
        
        if (error) {
            Serial.print(F("deserializeJson() failed: "));
            Serial.println(error.c_str());
            char error_put[64];
            StaticJsonDocument<64> doc;
            doc["sender"] = "self";
            doc["message"] = error.c_str();
            doc["room"] = mqtt_id;
            client.publish(mqtt_topic, error_put);
            return;
        }
        
        const char* sender = doc["Light"]["sender"];
        const char* message = doc["Light"]["message"];
        const char* destination = doc["Light"]["destination"];
        String message_str = message;
        String destination_str = destination;
        
        if(message_str.equals("ON")){
            if(RelayState == true){
            mqtt_publish("already On", sender);
            }
            else{
            setRelay(!RelayState);
            mqtt_publish("On", sender);
            }
        }
        else if(message_str.equals("STATE")){
            if(RelayState == true){
            mqtt_publish("On", sender);
            }
            else{
            mqtt_publish("Off", sender);
            }
        }
        else{
            if(message_str.equals("OFF")){
                if(RelayState == true){
                    setRelay(!RelayState);
                    mqtt_publish("Off", sender);
                }
                else{
                    mqtt_publish("already Off", sender);
                }
            }
        }
    } `}
              />
            </div>
          </Stack>
        </Item>
        <Item style={{ width: "90%", marginBottom: "3rem" }}>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: smallMode ? fontSize * 1.3 : fontSize,
              marginBottom: fontSize,
            }}
          >
            발생한 문제 및 해결 방법
          </Typography>
          <Stack spacing={2}>
            <Grid container>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">
                      펌웨어를 스위치 설치 이후에도 업데이트가 가능해야 하기에 ,
                      무선으로 업데이트 할 수 있어야 함.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                lg={2}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography>{smallMode ? "⬇" : "➡"}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">
                      Http Server를 이용한 펌웨어 업데이트 기능을 지원. 안정성을
                      위해 로그인 이후 가능하도록 설정.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {smallMode && <hr />}

            <Grid container>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">
                      서버와 연결이 종료되어도 다시 연결을 시도하여야 함.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                lg={2}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography>{smallMode ? "⬇" : "➡"}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">
                      스위치의 loop()에 지속적으로 연결상태를 확인 후, 연결이
                      끊어진 경우 다시 재연결 시도.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Item>
      </Stack>
    </div>
  );
}
