import './styles/components.scss';

const icon3 = '/assets/icon/icon_plus.svg';
const icon4 = '/assets/icon/icon_arrow_left.svg';
const icon5 = '/assets/icon/icon_arrow_right.svg';

const titleStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
  padding: '20px 0',
  margin: '50px 0 30px',
  borderTop: '1px solid #999',
  borderBottom: '1px solid #999',
};
const ProfileUlStyle = {
  display: 'flex',
  alignItems: 'flex-end',
  gap: 20,
};
const ProfileLiStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

const shareURL = window.location.href;

function App() {
  const handleURLShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard
          .writeText(shareURL)
          .then(() => {
            console.log('URL이 복사 되었습니다.');
          })
          .catch((error) => {
            console.error('클립보드 복사 실패');
          });
      }

      if (navigator.share) {
        await navigator.share({
          title: 'Title of the shared URL',
          text: 'Description of the shared URL',
          url: shareURL,
        });
      } else {
        console.error('Web Share API를 지원하지 않는 브라우저입니다.');
      }
    } catch (error) {
      console.error('URL 공유 실패:', error);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: 700, margin: '0 auto 100px' }}>
      <h2 style={titleStyle}>프로필 이미지</h2>
      <ul style={ProfileUlStyle}>
        <li style={ProfileLiStyle}>
          <div className="profile-picture--xlarge">
            <img
              src="https://audition.hanbiton.com/images/common/img_default.jpg"
              alt="empty"
            />
          </div>
          <strong>80px</strong>
        </li>
        <li style={ProfileLiStyle}>
          <div className="profile-picture--xlarge">
            <img
              src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/gift/pdt/1662/hot1606353441513.jpg"
              alt="유저프로필 이미지1"
            />
          </div>
          <strong>80px</strong>
        </li>
        <li style={ProfileLiStyle}>
          <div className="profile-picture--large">
            <img
              src="https://audition.hanbiton.com/images/common/img_default.jpg"
              alt="empty"
            />
          </div>
          <strong>58px</strong>
        </li>
        <li style={ProfileLiStyle}>
          <div className="profile-picture--large">
            <img
              src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/gift/pdt/1662/hot1606353441513.jpg"
              alt="유저프로필 이미지1"
            />
          </div>
          <strong>58px</strong>
        </li>
        <li style={ProfileLiStyle}>
          <div className="profile-picture--medium">
            <img
              src="https://audition.hanbiton.com/images/common/img_default.jpg"
              alt="empty"
            />
          </div>
          <strong>32px</strong>
        </li>
        <li style={ProfileLiStyle}>
          <div className="profile-picture--medium">
            <img
              src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/gift/pdt/1662/hot1606353441513.jpg"
              alt="유저프로필 이미지1"
            />
          </div>
          <strong>32px</strong>
        </li>
        <li style={ProfileLiStyle}>
          <div className="profile-picture--small">
            <img
              src="https://audition.hanbiton.com/images/common/img_default.jpg"
              alt="empty"
            />
          </div>
          <strong>28px</strong>
        </li>
        <li style={ProfileLiStyle}>
          <div className="profile-picture--small">
            <img
              src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/gift/pdt/1662/hot1606353441513.jpg"
              alt="유저프로필 이미지1"
            />
          </div>
          <strong>28px</strong>
        </li>
      </ul>
      <h2 style={titleStyle}>text ellipsis</h2>
      <h3
        style={{
          margin: '0 0 20px',
          padding: '20px',
          backgroundColor: '#eee',
        }}
      >
        @include textLineOverflow(원하는 라인 수) : @include textLineOverflow(1)
      </h3>
      <div style={ProfileUlStyle}>
        <div className="text--ellipsis one">
          <p className="font-bold">한줄 (예시 디자인 입니다)</p>
          <p className="one">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quis
            repellat, vel animi inventore corrupti, earum esse fuga porro
            officia, consectetur nesciunt rem voluptas! Maiores sequi inventore
            cupiditate doloribus quo.
          </p>
        </div>
        <div className="text--ellipsis">
          <p className="font-bold">2줄 (예시 디자인 입니다)</p>
          <p className="two">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quis
            repellat, vel animi inventore corrupti, earum esse fuga porro
            officia, consectetur nesciunt rem voluptas! Maiores sequi inventore
            cupiditate doloribus quo.
          </p>
        </div>
      </div>
      <h2 style={titleStyle}>input 가이드</h2>
      <div
        style={{
          margin: '0 0 20px',
          padding: '20px',
          backgroundColor: '#eee',
        }}
      >
        <strong>input 6가지 다지안</strong>
        <br />
        <br />
        <p>기본, hover, focuse, active, disabled, error</p>
      </div>
      <br />
      <br />
      <input type="text" className="input__element" placeholder="Enter text" />
      <br />
      <br />
      <input
        type="text"
        className="input__element"
        placeholder="Disabled"
        disabled
      />
      <br />
      <br />
      <input
        type="text"
        className="input__element error"
        placeholder="Error occurred"
      />
      <p className="error--message">Error Massage</p>
      <br />
      <br />
      <h2 style={titleStyle}>url 공유하기</h2>
      <button
        className="button--outlined button__size-h40"
        onClick={handleURLShare}
      >
        URL 공유(클립보드복사)
      </button>
      <br />
      <br />
      <h2 style={titleStyle}>button 가이드</h2>
      <br />
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
        <button className="button--fill-primary button__size-h56 font-bold">
          56px
        </button>
        <button className="button--fill-primary button__size-h40">40px</button>
        <button className="button--fill-primary button__size-h36 font-bold">
          36px
        </button>
        <button className="button--fill-primary button__size-h28" disabled>
          28px
        </button>
      </div>
      <br />
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
        <button className="button--outlined button__size-h56 font-bold">
          56px
        </button>
        <button className="button--outlined button__size-h40">40px</button>
        <button className="button--outlined button__size-h36 font-bold">
          36px
        </button>
        <button className="button--outlined button__size-h28" disabled>
          28px
        </button>
      </div>
      <br />
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
        <button className="button--outlined button__size-h36 before-icon btn-add">
          <span>추가</span>
        </button>
        <button
          className="button--outlined button__size-h36 before-icon btn-add"
          disabled
        >
          <span>추가</span>
        </button>
        <button className="button--outlined button__size-h36 before-icon btn-delete">
          <span className="unvisible">삭제하기</span>
        </button>
        <button
          className="button--outlined button__size-h36 before-icon btn-delete"
          disabled
        >
          <span className="unvisible">삭제하기</span>
        </button>
        <button className="button--icon-plus">
          <img src={icon3} alt="추가하기" />
        </button>
        <button className="button--icon-plus" disabled>
          <img src={icon3} alt="추가하기" />
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
        <button className="button--icon-shadow">
          <img src={icon4} alt="이전" />
        </button>
        <button className="button--icon-shadow">
          <img src={icon5} alt="다음" />
        </button>
      </div>
      <br />
      <br />
      <div className="button--toggle-box">
        <button
          type="button"
          className="button--toggle button__size-h40 active"
        >
          컬러
        </button>
        <button type="button" className="button--toggle button__size-h40">
          이미지
        </button>
      </div>{' '}
      <br />
      <br />
      <div className="button--toggle-box">
        <button type="button" className="button--toggle button__size-h40 ">
          컬러
        </button>
        <button
          type="button"
          className="button--toggle button__size-h40 active"
        >
          이미지
        </button>
      </div>
      <h2 style={titleStyle}>드롭다운 가이드</h2>
      <br />
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
        <div className="dropdown">
          <button className="dropdown__toggle hide">Dropdown 메뉴</button>
          <ul className="dropdown__menu">
            <li className="item">메뉴 항목 1</li>
            <li className="item">메뉴 항목 2</li>
            <li className="item">메뉴 항목 3</li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="dropdown__toggle error">Dropdown 메뉴</button>
          <ul className="dropdown__menu hide">
            <li className="item">메뉴 항목 1</li>
            <li className="item">메뉴 항목 2</li>
            <li className="item">메뉴 항목 3</li>
          </ul>
          <p className="error--message">Error Massage</p>
        </div>
      </div>
      <h2 style={titleStyle}>badge 가이드</h2>
      <br />
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
        <span className="badge__orange">지인</span>
        <span className="badge__purple">동료</span>
        <span className="badge__green">가족</span>
        <span className="badge__blue">친구</span>
      </div>
    </div>
  );
}

export default App;
