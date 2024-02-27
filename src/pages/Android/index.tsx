import { Stack, Typography } from "@mui/material";

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
      </Stack>
    </div>
  );
}
