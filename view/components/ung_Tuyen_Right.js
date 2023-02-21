import Image from "next/future/image";
import styled from "styled-components";
import Text from "../components/text";
import ut1 from "../img/ut1.png";
import ut2 from "../img/ut2.png";
import ut3 from "../img/ut3.png";
import ut4 from "../img/ut4.png";
import ut5 from "../img/ut5.png";
import ut6 from "../img/ut6.png";
import { Input } from "./input";
import PrimaryButton from "./PrimaryButton";

function Ung_Tuyen_Right() {
  return (
    <>
      <ItemRight>
        <Text title="HỎI/ĐÁP" />
        <RowRight>
          <InputRight>
            <label htmlFor="viTri">Lựa Chọn Vị Trí Ứng Tuyển</label>
            <select id="viTri" name="viTri">
              <option value="">Nhân Viên Quản Lý Hồ Sơ</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
              <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
              <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
            </select>
          </InputRight>
          <InputRight>
            <label htmlFor="trinhDo">Lựa Chọn Trình Độ</label>
            <select id="trinhDo" name="trinhDo">
              <option value="">Trung Cấp</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
              <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
              <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
            </select>
          </InputRight>
        </RowRight>
        <RowRight>

          <Input  title="Bạn biết thông tin tuyển dụng từ đâu?" place="Bạn biết thông tin tuyển dụng từ đâu?" sty="2"/>
          <InputRight>
            <label htmlFor="phongVan">Hình Thức Phỏng Vấn</label>
            <select id="phongVan" name="phongVan">
              <option value="">Tại Văn Phòng</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
              <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
              <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
            </select>
          </InputRight>
        </RowRight>        
        <Text title="HỌC VẤN"/>
        <Textarea>
          <Image src={ut1} alt="Logo" width={100} height={100} />
          <div>
            <label htmlFor="lamviec">Quá trình học tập của bạn</label>
            <li>
              ( VD : TỪ 2015 ĐẾN 2019 | ĐẠI HỌC : NÔNG NGHIỆP TPHCM | TỐT NGHIỆP
              LOẠI: KHÁ | CHUYÊN NGÀNH : THÚ Y)
            </li>
            <textarea id="hoctap" name="hoctap" rows="5"></textarea>
          </div>
        </Textarea>
        <Textarea>
          <Image src={ut2} alt="Logo" width={100} height={100} />
          <div>
            <label htmlFor="hoctap">Quá trình làm việc của bạn</label>
            <li>
              ( VD : TỪ 2015 ĐẾN 2019 | CÔNG TY :TNHH QA | VỊ TRÍ : NHÂN VIÊN)
            </li>
            <textarea id="lamviec" name="lamviec" rows="5"></textarea>
          </div>
        </Textarea>
        <Textarea>
          <Image src={ut3} alt="Logo" width={100} height={100} />
          <div>
            <label htmlFor="hoctap">Thôn tin gia đình của bạn</label>
            <li>
              ( VD : Họ và Tên : Lê Văn A-1977 | Nghề Nghiệp: Nông Dân |Quan hệ
              : Cha)
            </li>
            <textarea id="lamviec" name="lamviec" rows="5"></textarea>
          </div>
        </Textarea>
        <Text title="FILE CV(NẾU CÓ)" />
        <Textarea>
          <Image src={ut4} alt="Logo" width={100} height={100} />
          <div>
            <span>Chọn File CV</span>
            <div>Đính Kèm File CV</div>
          </div>
        </Textarea>
        <WI>
          <div>
            <Text
              title={<Image src={ut5} alt="Logo" width={50} height={50} />}
            />
            <Text title="CAM KẾT NGHĨA VỤ" />
          </div>
          <li>
            Tôi cam kết đồng ý nếu công ty phát hiện bạn có nợ xấu tại bất kì tổ
            chức tín dụng nào thì công ty sẽ chấm dứt hợp đồng công tác với bạn
            ngay lập tức
          </li>
          <li>
            Tôi cam kết mọi thông tin trên đều là sự thật , nếu sai tôi sẽ chịu
            trách nhiệm trước nội quy công ty về vấn đề phạt vi phạm
          </li>
          <li>Tôi cam kết sẽ tuân thủ theo quy định của công ty</li>
        </WI>
        <WI>
          <div>
            <Text
              title={<Image src={ut6} alt="Logo" width={50} height={50} />}
            />
            <Text title="LƯU Ý" />
          </div>
          <li>
            Hồ sơ xin việc (CMND , Sơ yếu lý lịch) của ứng viên ,Công ty sẽ
            không hoàn trả lại , Những thông tin trên sẽ được cậo nhật để tạo
            User,Thẻ nhân viên , Ứng viên sẽ nhận được thông báo về :Quy trình
            làm việc, Quy trịnh công ty , Quy định tác phong khi phỏng vấn
          </li>
        </WI>
        <div className="center">
          <PrimaryButton ut title="Nộp Đơn Ứng Tuyển" />
        </div>
      </ItemRight>
    </>
  );
}

export default Ung_Tuyen_Right;
const ItemRight = styled.div`
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  border: 1px solid #cbcbcb;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 4px;
  border-radius: 5px;
  .center {
    display: block;
    text-align: center;
  }
  .hover {
    border-radius: 999999px;
    border: 5px solid #999;
    text-align: center;
    :hover {
      border-color: #f36969;
      transition: 0.4s all ease;
      cursor: pointer;
    }
  }
  label {
    font-size: var(--font-medium);
    font-weight: 570;
    color: #6f7e98;
  }
  select {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: var(font--medium);
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
`;
const InputRight = styled.div`
  margin: 10px 0;
  padding: 0 15px;
  width: 50%;
  label {
    margin: 10px 0;
  }
`;
const Textarea = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  img {
    margin: 0 5px;
  }
  div {
    padding: 0 15px;
    width: 100%;
    li {
      color: #6f7e98;
    }
    textarea {
      border: 1px solid #000;
      border-radius: 10px;
      width: 100%;
      height: 180px;
      color: #6f7e98;
      line-height: 31px;
      background-image: -webkit-linear-gradient(left, white 0, transparent 0),
        -webkit-linear-gradient(right, white 0, transparent 0),
        -webkit-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
      background-repeat: repeat-y;
      background-size: 100% 100%, 100% 100%, 100% 31px;
      background-attachment: local;

      resize: none !important;
      overflow: auto !important;
      outline: none;
      box-shadow: none !important;
    }
  }
`;
const RowRight = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const WI = styled.div`
  padding-bottom: 20px;
  div {
    display: inline-flex;
    align-items: center;
    margin: 0 5px;
  }
  li {
    padding-left: 15px;
    font-size: var(--font-medium);
    font-weight: 300;
  }
`;
