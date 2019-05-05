export default function Header() {
  return (
    <div className="header-box">
      <div className="header-left">
        <span className="show-high">鸿信财智</span>
        <span className="show-low">企业管理咨询有限公司</span>
      </div>
      <div className="header-right">
        <img src="/static/phone_icon.png" alt="phone" />
        <span className="divide-line" />
        <div className="phone-box">
          <span>服务热线</span>
          <span>186 2892 1913</span>
        </div>
      </div>
    </div>
  );
}