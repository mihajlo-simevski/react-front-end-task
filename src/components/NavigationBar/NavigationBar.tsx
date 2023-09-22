import './NavigationBar.scss';

function NavigationBar() {
  return (
    <div className="NavigationBar">
      <ul className="navbar-list">
        <li className="navbar-item disabled">Analytics</li>
        <li className="navbar-item">Overview</li>
        <li className="navbar-item active">Schedule</li>
      </ul>
    </div>
  );
}

export default NavigationBar;
