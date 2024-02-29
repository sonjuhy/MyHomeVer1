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
  /**
   * 구조도
   * 작동 시퀀스
   * 기능 1,2,3...
   * 해당 코드
   * 작성 이유 (문제가 있을 경우 어떤 경우로 해결했는지)
   * */
  const dispatch = useAppDispatch();
  const { prefix }: any = useContext(PortfolioContext);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const fontSize = smallMode ? 16 : 32;

  useEffect(() => {
    const handleResize = () => {
      // 컨테이너의 너비를 감지하여 글자 크기 동적 조절
      const containerWidth = document.getElementById(
        "background_container"
      )?.offsetWidth;

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
      id="background_container"
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
          <Typography
            style={{ fontSize: smallMode ? fontSize * 1.5 : fontSize * 1.2 }}
          >
            백엔드 구조도(Python)
          </Typography>
          <div
            style={{
              display: "flex",
              width: "70%",
              justifyContent: "center",
            }}
          >
            <img
              src={`${prefix}/image/image/backend.png`}
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
                  <li>Android / Switch로부터 들어오는 MQTT 메세지 처리.</li>
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
                  2. Scheduler를 통한 원하는 시간에 이벤트 발생
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: fontSize * 1.5,
                    fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5,
                  }}
                >
                  <li>설정한 시간에 원하는 동작을 하도록 설정.</li>
                  <li>즉 예약으로 원하는 전등에 원하는 동작을 설정.</li>
                </Typography>
                <br />
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: smallMode ? fontSize * 0.8 : fontSize,
                    fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8,
                  }}
                >
                  3. Multi-Processing을 통한 독립적 실행
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: fontSize * 1.5,
                    fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5,
                  }}
                >
                  <li>
                    MQTT는 subscribe 기능을 실시간으로 처리하기 위해 하나의
                    프로세스를 온전히 다 사용함.
                  </li>
                  <li>예약 기능(scheduler)를 위해 별도의 프로세스가 필요함.</li>
                  <li>
                    파이썬은 멀티 쓰레드 개념이 없기에 멀티 프로세스를 사용.
                  </li>
                </Typography>
              </div>
            </SubItem>

            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.3 : fontSize }}
            >
              IoT 중계 기능
            </Typography>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8 }}
            >
              ▪ Android ➡ Server
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
                  src={`${prefix}/image/image/MQTTFromAndroid.png`}
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
                language={"python"}
                showLineNumbers={true}
                theme={dracula}
                text={`def on_message_fromAndroid(self, client, user_data, msg):
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
                  src={`${prefix}/image/image/MQTTFromSwitch.png`}
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
                      주기적으로 스위치 연결 상태 및 현 상태(on/off) 정보 필요
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
                      1분마다 주기적으로 각 스위치에 상태 확인 신호를
                      보내고(pub), 이에 대한 결과값을 받아(sub) DB에 저장하는
                      방식으로 해결.
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
                      서버가 정전으로 재부팅 되어도 다시 백엔드가 실행되어야 함.
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
                      리눅스(우분투)의 systmed를 이용하여 os가 부팅되었을때,
                      자동으로 python 스크립트가 작동하도록 설정.
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
                      하나의 프로세스를 모두 사용하는 여러 작업들을 동시
                      실행해야 하며, 해당 프로세스끼리 통신을 통해 데이터를 주고
                      받아야 함.
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
                      멀티 프로세싱으로 필요한 서비스들을 병렬적으로 실행함.
                      그리고 멀티프로세싱의 큐를 이용하여 각 프로세스끼리 통신을
                      할 수 있도록 함.
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
