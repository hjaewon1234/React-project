import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <FooterBox>
      <div className="footer-container">
        <div className="footer-item">
          <div>
            <Link className="customer-center">고객센터</Link>
          </div>
          <div>
            <Link className="customer-num">1670-0876</Link>
            <span className="call-time">09:00~18:00</span>
          </div>
          <div>평일 : 전체 문의 상담 가능</div>
          <div>
            주말, 공휴일 : 오늘의집 직접배송, 이사/시공/수리 문의 상담 가능
          </div>
          <div className="footer-contact-container">
            <Link className="footer-contact-btn">
              카톡 상담&#40;평일 09:00~18:00&#41;
            </Link>
          </div>
          <div className="footer-contact-container">
            <Link className="footer-contact-btn">이메일 문의</Link>
          </div>
        </div>
        <div className="footer-item">
          <div>
            <div>회사소개</div>
            <div>채용정보</div>
            <div>이용약관</div>
            <div className="personal-info">
              <Link>개인정보 처리방침</Link>
            </div>
            <div>공지사항</div>
            <div>안전거래센터</div>
          </div>
          <div>
            <div>입점신청</div>
            <div>제휴/광고 문의</div>
            <div>사업자 구매 회원</div>
            <div>시공파트너 안내</div>
            <div>상품광고 소개</div>
            <div>고객의 소리</div>
          </div>
        </div>
        <div className="footer-item">
          <div>
            <div className="footer-item-company-info">
              (주)버킷플레이스
              <span>|</span>
            </div>
            <div className="footer-item-company-info">
              대표이사 이승재
              <span>|</span>
            </div>
            <div className="footer-item-company-info">
              서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층
            </div>
          </div>
          <div>
            <div className="footer-item-company-info">
              contact@bucketplace.net
              <span>|</span>
            </div>
            <div className="footer-item-company-info">
              사업자등록번호 119-86-91245
            </div>
            <Link className="footer-item-company-info">사업자정보확인</Link>
          </div>
          <div className="footer-item-company-info">
            통신판매업신고번호 제2018-서울서초-0580호
          </div>
          <div className="footer-item-img-layer">
            <div className="footer-item-img-layer-item">
              <img src="/img/footer/isms.png" />
              <div className="footer-item-img-layer-item-container footer-item-img-layer-item-container-left">
                <span>오늘의집 서비스 운영</span>
                <span>2021. 09. 08 ~ 2024. 09. 07</span>
              </div>
            </div>
            <div className="footer-item-img-layer-item">
              <img src="img/footer/dnv.png" />
              <div className="footer-item-img-layer-item-container">
                <span>
                  고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을
                  체결하여 안전거래를 보장하고 있습니다.
                </span>
                <Link className="footer-item-company-info">
                  서비스가입사실확인
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-item-img-layer">
            (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가
            등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단,
            (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을
            부담합니다.
          </div>
          <div className="footer-item-img-layer footer-item-icon-layer">
            <img src="/img/footer/icons/instagram.svg" />
            <img src="/img/footer/icons/youtube.svg" />
            <img src="/img/footer/icons/facebook.svg" />
            <img src="/img/footer/icons/twitter.svg" />
            <img src="/img/footer/icons/naver.svg" />
            <img src="/img/footer/icons/naverLine.svg" />
            <img src="/img/footer/icons/kakaoTalk.svg" />
            <img src="/img/footer/icons/kakaoStory.svg" />
          </div>
          <div>
            <div>
              Copyright 2014. bucketplace, Co., Ltd. All rights reserved.
            </div>
            <div className="cloned-by">cloned by Team go-to-work</div>
          </div>
        </div>
      </div>
    </FooterBox>
  );
};

export default FooterComponent;

const FooterBox = styled.div`
  margin-top: 50px;
  width: 100%;
  background-color: #e9e9e9;
  font-size: 12px;
  padding: 30px 0 30px;
  .footer-container {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .footer-item {
    padding: 10px 20px;
  }
  .footer-item:first-child {
    width: 25%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer-item:nth-child(2) {
    width: 25%;
    border-left: 1px solid #c2c2c2;
    border-right: 1px solid #c2c2c2;
    display: flex;
    justify-content: space-evenly;
  }
  .footer-item:last-child {
    text-align: left;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
  }
  .footer-item:nth-child(2) > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer-item a {
    text-decoration: none;
    color: inherit;
  }
  .footer-item a:hover {
    text-decoration: underline;
  }
  .call-time {
    font-size: 14px;
    margin-left: 15px;
  }
  .footer-contact-btn {
    border: 1px solid #c2c2c2;
    padding: 5px;
    border-radius: 5px;
  }
  .footer-contact-btn:hover {
    text-decoration: none !important;
  }
  .footer-contact-container {
    margin: 10px 0;
  }
  .customer-center,
  .customer-num {
    font-weight: bold;
    font-size: 16px;
  }
  .customer-center {
    display: block;
    font-size: 20px;
  }
  .personal-info {
    font-weight: bold;
  }
  .footer-item-img-layer {
    display: flex;
    gap: 10px;
    font-size: 11px;
    margin: 10px 0;
  }
  .footer-item-company-info {
    display: inline-block;
    margin: 3px 0;
  }
  .footer-item-company-info span {
    margin: 0 3px;
  }
  .footer-item-img-layer-item {
    display: flex;
    gap: 5px;
  }
  .footer-item-img-layer-item img {
    width: 32px;
    height: 32px;
  }
  a.footer-item-company-info {
    margin-left: 3px;
    font-weight: bold;
  }
  .footer-item-img-layer-item-container-left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .footer-item-img-layer-item-container-left span {
    white-space: nowrap;
  }
  .footer-item-icon-layer img {
    filter: invert(81%) sepia(24%) saturate(1%) hue-rotate(357deg)
      brightness(97%) contrast(97%);

    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .footer-item-icon-layer img:hover {
    filter: none;
  }
  .cloned-by {
    margin-top: 3px;
    font-weight: bold;
    color: #f0a500;
  }
`;
