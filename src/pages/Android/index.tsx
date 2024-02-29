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
        document.getElementById("android_container")?.offsetWidth;

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
      id="android_container"
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
          🌐 Android 상세 설명
        </Typography>
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
                  1. 개인화
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: fontSize * 1.5,
                    fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5,
                  }}
                >
                  <li>DB와 연동하여 계정 기능을 통한 개인화 서비스 제공.</li>
                  <li>
                    공지, 전등 예약 등 기능들을 계정의 정보를 기반하여 서비스
                    제공.
                  </li>
                  <li>자동 로그인 기능 제공</li>
                </Typography>
                <br />
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: smallMode ? fontSize * 0.8 : fontSize,
                    fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8,
                  }}
                >
                  2. MQTT를 통한 스위치 제어
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: fontSize * 1.5,
                    fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5,
                  }}
                >
                  <li>MQTT를 통해 스위치를 제어하는 기능.</li>
                  <li>
                    메인 화면에 제공되는 빠른 스위치 제어 및 스위치 세부 제어
                    엑티비티에서 모두 제어 가능.
                  </li>
                </Typography>
                <br />
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: smallMode ? fontSize * 0.8 : fontSize,
                    fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8,
                  }}
                >
                  3. 날씨 정보 제공
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: fontSize * 1.5,
                    fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5,
                  }}
                >
                  <li>기상청 API를 통해 정보를 받아와 날씨 정보 제공.</li>
                  <li>현재 날씨, 하루 날씨를 제공.</li>
                </Typography>
                <br />
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: smallMode ? fontSize * 0.8 : fontSize,
                    fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8,
                  }}
                >
                  4. Cloud 서비스 제공
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    marginLeft: fontSize * 1.5,
                    fontSize: smallMode ? fontSize * 0.9 : fontSize * 0.5,
                  }}
                >
                  <li>SFTP를 통한 Cloud 기능 제공.</li>
                  <li>파일 탐색, 다운로드, 업로드 기능 제공.</li>
                  <li>공용 및 개인 폴더 분리하여 사용 가능.</li>
                </Typography>
              </div>
            </SubItem>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.3 : fontSize }}
            >
              DB 통신
            </Typography>
            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8 }}
            >
              ▪ HttpUrlConnection(With AsyncTask)
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
                  src={`${prefix}/image/image/AndroidAsyncTask.png`}
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
                language={"java"}
                showLineNumbers={true}
                theme={dracula}
                text={`import android.app.ProgressDialog;
import android.content.Context;
import android.os.AsyncTask;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.SocketException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

public class Network extends AsyncTask<String, Void, String> {
    private HttpURLConnection httpURLConnection = null;
    private OutputStream outputStream = null;
    private String data = null;
    private String link = "Server Link";
    private String line = null;
    private String mJsonString = null;
    private int responseStatusCode = 0;
    private int mode = 0;
    private boolean dialog_use = false;
    private boolean upload_mode = false;

    private Context context;
    private InputStream inputStream = null;
    private InputStreamReader inputStreamReader = null;
    private BufferedReader bufferedReader = null;
    private StringBuilder stringBuilder = null;
    private URL url = null;

    private ProgressDialog progressDialog;

    public Network(Context context){
        this.context = context;
        this.dialog_use = true;
    }
    public Network(){
        this.dialog_use = false;
    }
    @Override
    protected void onPreExecute() {
        if(dialog_use) {
            progressDialog = new ProgressDialog(context);
            progressDialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);
            progressDialog.setCancelable(false);
            progressDialog.setMessage("로딩 중입니다.");
            progressDialog.show();
        }
        super.onPreExecute();
    }

    @Override
    protected String doInBackground(String... _param){
        String n = _param[0];
        switch (n){
            case "login":
                link += "/Login_Check.php";
                Login_Input(_param[1],_param[2]);
                mode = 1;
                upload_mode = true;
                break;
            case "Signin":
                link += "/SignUp.php";
                Signin_Input(_param[1], _param[2], _param[3]);
                mode = 2;
                upload_mode = true;
                break;
            case "IDOverlap":
                link += "/SignUP_IDCheck.php";
                Overlap_Input(_param[1]);
                upload_mode = true;
                break;
            case "Get_Userinfo":
                link += "/Get_UserInfo.php";
                mode = 3;
                break;
            case "Get_Ver":
                link += "/Get_Version.php";
                break;
            case "Update_User":
                link += "/Update_UserData.php";
                Signin_Input(_param[1], _param[2], _param[3]);
                upload_mode = true;
                break;
            case "FileList":
                link += "/Get_Filelist.php";
                Filelist_Input(_param[1]);
                upload_mode = true;
                break;
            case "FileDelete":
                link += "/Delete_file.php";
                FileDelete_Input(_param[1], _param[2], _param[3], _param[4]);//dir, path, mode, user
                upload_mode = true;
                break;
            case "FileRestore":
                link += "/Restore_file.php";
                FileRestore_Input(_param[1], _param[2], _param[3], _param[4]);//file, path, mode, user
                upload_mode = true;
                break;
            case "FileDistroy":
                link += "/Distroy_file.php";
                FileDistroy_Input(_param[1], _param[2]);//file,  path
                upload_mode = true;
                break;
            case "Get_Notice":
                link += "/Notice_GetList.php";
                break;
            case "Set_Notice":
                link += "/Notice_Set.php";
                Notice_Input(_param[1], _param[2], _param[3], _param[4]); // time, content, name, title
                upload_mode = true;
                break;
            case "Delete_Notice":
                link += "/Notice_Delete.php";
                NoticeDelete_Input(_param[1]);//Num
                upload_mode = true;
                break;
            case "Light_State":
                link += "/Light_State.php";
                upload_mode = false;
                break;
            case "Light_ReserveList":
                link += "/Get_Reserve.php";
                upload_mode = false;
                break;
            case "Light_ReserveUpload"://String time, String day, String name, String room, String roomkor, String action, String repeat
                link += "/Set_Reserve.php";
                LightReserveSet_Input(_param[1], _param[2], _param[3], _param[4], _param[5], _param[6], _param[7]);
                upload_mode = true;
                break;
            case "Light_ReserveUpdate"://String time, String day, String name, String room, String roomkor, String action, String repeat, String num
                link += "/Update_Reserve.php";
                LightReserveUpdate_Input(_param[1], _param[2], _param[3], _param[4], _param[5], _param[6], _param[7], _param[8]);
                upload_mode = true;
                break;
            case "Light_ReserveDelete":
                link += "/Delete_Reserve.php";
                LightReserveDelete_Input(_param[1]);
                upload_mode = true;
                break;

        }
        try{
            url = new URL(link);

            httpURLConnection = (HttpURLConnection)url.openConnection();
            httpURLConnection.setReadTimeout(15000);
            httpURLConnection.setConnectTimeout(15000);
            httpURLConnection.setRequestMethod("POST");
            httpURLConnection.setDoInput(true);
            httpURLConnection.setDoOutput(true);
            httpURLConnection.connect();

            if(upload_mode) {
                outputStream = httpURLConnection.getOutputStream();
                outputStream.write(data.getBytes(StandardCharsets.UTF_8));
                outputStream.flush();
                outputStream.close();
            }

            responseStatusCode = httpURLConnection.getResponseCode();

            if(responseStatusCode == HttpURLConnection.HTTP_OK){
                inputStream = httpURLConnection.getInputStream();
                System.out.println("response is ok");
            }
            else{
                inputStream = httpURLConnection.getErrorStream();
                System.out.println("response is error : " + inputStream);
            }
            inputStreamReader = new InputStreamReader(inputStream, StandardCharsets.UTF_8);
            bufferedReader = new BufferedReader(inputStreamReader);

            stringBuilder = new StringBuilder();

            while((line = bufferedReader.readLine()) != null){
                stringBuilder.append(line);
            }

            httpURLConnection.disconnect();
            return stringBuilder.toString().trim();

        } catch (ProtocolException e) {
            e.printStackTrace();
            System.out.println("protocol error");
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("IO error");
        }

        return "Error";
    }

    @Override
    protected void onPostExecute(String s) {
        switch (mode){
            case 1://login
                break;
            case 2:
                break;
            case 3:
                break;
        }
        if(dialog_use) {
            progressDialog.dismiss();
        }
        super.onPostExecute(s);
    }

    private void Login_Input(String user_id, String user_pw){
        try {
            data = URLEncoder.encode("ID", "UTF-8") + "=" + URLEncoder.encode(user_id, "UTF-8");
            data += "&" + URLEncoder.encode("PW", "UTF-8") + "=" + URLEncoder.encode(user_pw, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void Signin_Input(String user_id, String user_pw, String user_name){
        try {
            data = URLEncoder.encode("ID", "UTF-8") + "=" + URLEncoder.encode(user_id, "UTF-8");
            data += "&" + URLEncoder.encode("Name","UTF-8")+"="+ URLEncoder.encode(user_name,"UTF-8");
            data += "&" + URLEncoder.encode("PW", "UTF-8") + "=" + URLEncoder.encode(user_pw, "UTF-8");
            System.out.println("Sign data : " + data);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void Filelist_Input(String dir){
        try {
            data = URLEncoder.encode("server_dir","UTF-8")+"="+URLEncoder.encode(dir,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void FileDelete_Input(String dir, String path, String mode, String user){
        try {
            data = URLEncoder.encode("dir", "UTF-8") + "=" + URLEncoder.encode(dir, "UTF-8");
            data += "&" + URLEncoder.encode("path","UTF-8")+"="+ URLEncoder.encode(path,"UTF-8");
            data += "&" + URLEncoder.encode("user","UTF-8")+"="+ URLEncoder.encode(user,"UTF-8");
            data += "&" + URLEncoder.encode("mode", "UTF-8") + "=" + URLEncoder.encode(mode, "UTF-8");
            System.out.println("Sign data : " + data);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void FileRestore_Input(String file, String path, String mode, String user){
        try {
            data = URLEncoder.encode("file", "UTF-8") + "=" + URLEncoder.encode(file, "UTF-8");
            data += "&" + URLEncoder.encode("path","UTF-8")+"="+ URLEncoder.encode(path,"UTF-8");
            data += "&" + URLEncoder.encode("user","UTF-8")+"="+ URLEncoder.encode(user,"UTF-8");
            data += "&" + URLEncoder.encode("mode", "UTF-8") + "=" + URLEncoder.encode(mode, "UTF-8");
            System.out.println("Sign data : " + data);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void FileDistroy_Input(String file, String path){
        try {
            data = URLEncoder.encode("file","UTF-8")+"="+URLEncoder.encode(file,"UTF-8");
            data += "&" + URLEncoder.encode("path", "UTF-8") + "=" + URLEncoder.encode(path, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void Overlap_Input(String ID){
        try {
            data = URLEncoder.encode("ID","UTF-8")+"="+URLEncoder.encode(ID,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void Notice_Input(String Time,String Content,String Name, String title){
        try {
            data = URLEncoder.encode("Time","UTF-8")+"="+URLEncoder.encode(Time,"UTF-8");
            data += "&" + URLEncoder.encode("Content", "UTF-8") + "=" + URLEncoder.encode(Content, "UTF-8");
            data += "&" + URLEncoder.encode("Name", "UTF-8") + "=" + URLEncoder.encode(Name, "UTF-8");
            data += "&" + URLEncoder.encode("Title", "UTF-8") + "=" + URLEncoder.encode(title, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void NoticeDelete_Input(String Num){
        try {
            data = URLEncoder.encode("Num","UTF-8")+"="+URLEncoder.encode(Num,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void LightReserveSet_Input(String time, String day, String name, String room, String roomkor , String action, String repeat){
        try {
            data = URLEncoder.encode("Time","UTF-8")+"="+URLEncoder.encode(time,"UTF-8");
            data += "&" + URLEncoder.encode("Do", "UTF-8") + "=" + URLEncoder.encode(action, "UTF-8");
            data += "&" + URLEncoder.encode("Name", "UTF-8") + "=" + URLEncoder.encode(name, "UTF-8");
            data += "&" + URLEncoder.encode("Day", "UTF-8") + "=" + URLEncoder.encode(day, "UTF-8");
            data += "&" + URLEncoder.encode("Room", "UTF-8") + "=" + URLEncoder.encode(room, "UTF-8");
            data += "&" + URLEncoder.encode("RoomKor", "UTF-8") + "=" + URLEncoder.encode(roomkor, "UTF-8");
            data += "&" + URLEncoder.encode("Repeat", "UTF-8") + "=" + URLEncoder.encode(repeat, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void LightReserveUpdate_Input(String time, String day, String name, String room, String roomkor , String action, String repeat, String num){
        try {
            data = URLEncoder.encode("Time","UTF-8")+"="+URLEncoder.encode(time,"UTF-8");
            data += "&" + URLEncoder.encode("Do", "UTF-8") + "=" + URLEncoder.encode(action, "UTF-8");
            data += "&" + URLEncoder.encode("Name", "UTF-8") + "=" + URLEncoder.encode(name, "UTF-8");
            data += "&" + URLEncoder.encode("Day", "UTF-8") + "=" + URLEncoder.encode(day, "UTF-8");
            data += "&" + URLEncoder.encode("Room", "UTF-8") + "=" + URLEncoder.encode(room, "UTF-8");
            data += "&" + URLEncoder.encode("RoomKor", "UTF-8") + "=" + URLEncoder.encode(roomkor, "UTF-8");
            data += "&" + URLEncoder.encode("Repeat", "UTF-8") + "=" + URLEncoder.encode(repeat, "UTF-8");
            data += "&" + URLEncoder.encode("Num", "UTF-8") + "=" + URLEncoder.encode(num, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    private void LightReserveDelete_Input(String num){
        try {
            data = URLEncoder.encode("Num","UTF-8")+"="+URLEncoder.encode(num,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
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

            <Typography variant="body1">▪ 코드</Typography>
            <div
              style={{
                margin: "1rem",
                // width: "50%",
                textAlign: "left",
              }}
            >
              <CodeBlock
                language={"java"}
                showLineNumbers={true}
                theme={dracula}
                text={`public class MQTT_Main extends Service {
                  private static final String TAG = "Mqtt_Client";
                  private MqttClient mqttClient_Light;
              
                  private String TOPIC_PUB = "";
                  private String TOPIC_SUB = "";
              
                  private String TOPIC_LIGHT_PUB = "MyHome/Light/Pub/Server";
                  private String TOPIC_LIGHT_SUB = "MyHome/Light/Result";
                  private String TOPIC_RESERVE_PUB = "MyHome/Light/Reserve/Pub";
              
                  private String Server_IP = "tcp://server link:1883";
                  private String category = null;
              
                  private int mode = 0;
              
              
                  public MQTT_Main(){
                      try {
                          mqttClient_Light = new MqttClient(Server_IP, MqttClient.generateClientId(), null);
                          mqttClient_Light.connect();
                      } catch (MqttException e) {
                          e.printStackTrace();
                      }
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
                  src={`${prefix}/image/image/AndroidMQTTCallBack.png`}
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
                language={"java"}
                showLineNumbers={true}
                theme={dracula}
                text={`
  public void Mqtt_Control(boolean mode){//true : on, false : off
    try {
        mqttClient = new MqttClient(Server_IP, MqttClient.generateClientId(), null);
        mqttClient.connect();
        if(mqttClient.isConnected()){
            System.out.println("Out class connected");
        }
        else{
            System.out.println("Out class connected failed");
            mqttClient.connect();
        }
        
        mqttClient.subscribe(TOPIC_SUB+user.Get_name());
        mqttClient.setCallback(new MqttCallback() {
            @Override
            public void connectionLost(Throwable throwable) {

            }

            @Override
            public void messageArrived(String s, MqttMessage mqttMessage) throws Exception {
                System.out.println("Message is arrived mqtt : " + mqttMessage.toString());
                //Toast.makeText(context, "test"+mqttMessage.toString(), Toast.LENGTH_SHORT).show();
                toasttest(mqttMessage.toString());
            }

            @Override
            public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {
                System.out.println("My_Room_Light");
            }
        });
    } catch (MqttException e) {
        e.printStackTrace();
    }
}
                `}
              />
            </div>

            <Typography
              style={{ fontSize: smallMode ? fontSize * 1.1 : fontSize * 0.8 }}
            >
              ▪ MQTT Pub(Publisher)
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
                language={"java"}
                showLineNumbers={true}
                theme={dracula}
                text={`
public void Mqtt_Publish(int mode, String message){
  try {
      switch (mode){
          case 1://room light
              if(selected_str.equals("balcony main")){
                  category = "living Room";
              }
              JSONObject object = new JSONObject();
              try{
                  JSONObject tmp = new JSONObject();
                  tmp.put("sender",user.Get_name());
                  tmp.put("message",message);
                  tmp.put("destination",selected_str);
                  tmp.put("room",category);
                  object.put("Light",tmp);
              } catch (JSONException e) {
                  e.printStackTrace();
              }
              String tmp_str = object.toString();
              mqttClient_Light.publish(TOPIC_PUB, new MqttMessage(tmp_str.getBytes()));
              break;
          case 2://light reserve
              mqttClient_Reserve.publish(TOPIC_LIGHT_PUB, new MqttMessage(message.getBytes()));
              break;
      }
  } catch (MqttException e) {
      e.printStackTrace();
  }
}
                `}
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
            <Grid
              container
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">
                      스위치 제어를 실시간으로 해야하며, 본인이 제어하지
                      않더라도 변경된 스위치 값을 실시간으로 확인 할 수 있어야
                      함.
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
                      MQTT 서버와 연결하여 Pub, Sub을 통해 메세지 큐 형식으로
                      데이터를 실시간으로 처리하도록 함.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {smallMode && <hr />}
            <Grid
              container
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">
                      메인 엑티비티 와 IoT 엑티비티의 MQTT 리스너 값 공유
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
                      브로드캐스트를 통해 MQTT 리스너로부터 온 메세지 처리
                      결과를 방송하고, 이 방송을 구독 중인 엑티비티에서 해당
                      값을 UI 수정을 통해 사용자가 확인 할 수 있도록 함.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {smallMode && <hr />}
            <Grid
              container
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Card>
                  <CardContent>
                    <Typography variant="body2">
                      실제로 클라우드 파일들의 정보 및 제어가 가능해야 함.
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
                      SFTP를 통해서 실제 파일을 제어하도록 하여 해결.
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
