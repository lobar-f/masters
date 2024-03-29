import React from "react";
import {
  Bell,
  Calendar,
  Clipboard,
  CreditCard,
  Lock,
  Power,
  RefreshCw,
  Settings,
  Trash2,
  User,
  UserPlus,
} from "react-feather";
import { Link } from "react-router-dom";
import { ProfileBg, User11 } from "../../imagepath";

export default function StudentSideBar({ activeMenu }) {
  return (
    <div className="col-xl-3 col-md-4 theiaStickySidebar">
      <div className="settings-widget dash-profile mb-3">
        <div className="settings-menu p-0">
          <div className="profile-bg">
            <h5>Beginner</h5>
            <img src={ProfileBg} alt="" />
            <div className="profile-img">
              <Link to="/students-profile">
                <img src={User11} alt="" />
              </Link>
            </div>
          </div>
          <div className="profile-group">
            <div className="profile-name text-center">
              <h4>
                <Link to="/students-profile">Rolands R</Link>
              </h4>
              <p>Student</p>
            </div>
            <div className="go-dashboard text-center">
              <Link to="/deposit-student-dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-widget account-settings">
        <div className="settings-menu">
          <h3>ACCOUNT SETTINGS</h3>
          <ul>
            <li
              className={
                activeMenu === "EditProfile" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/setting-edit-profile" className="nav-link">
                <Settings size={20} /> Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-security"
                className={
                  activeMenu === "Security" ? "nav-item active" : "nav-item"
                }
              >
                <User size={20} /> Security
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-social-profile"
                className={
                  activeMenu === "SocialProfile"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <RefreshCw size={20} /> Social Profiles
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-notification"
                className={
                  activeMenu === "Notification" ? "nav-item active" : "nav-item"
                }
              >
                <Bell size={20} /> Notifications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-privacy"
                className={
                  activeMenu === "Privacy" ? "nav-item active" : "nav-item"
                }
              >
                <Lock size={20} /> Profile Privacy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-delete-profile"
                className={
                  activeMenu === "DeleteProfile"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Trash2 size={20} /> Delete Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-accounts"
                className={
                  activeMenu === "Accounts" ? "nav-item active" : "nav-item"
                }
              >
                <User size={20} /> Linked Accounts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-referral"
                className={
                  activeMenu === "Referral" ? "nav-item active" : "nav-item"
                }
              >
                <UserPlus size={20} /> Referrals
              </Link>
            </li>
            <li className="nav-item">
              <Link to="login" className="nav-link">
                <Power size={20} /> Sign Out
              </Link>
            </li>
            {activeMenu === "Ticket" ? (
              <li className="nav-item active">
                <Link to="login" className="nav-link">
                  <Clipboard size={20} /> Support Tickets
                </Link>
              </li>
            ) : null}
          </ul>
          <h3>SUBSCRIPTION</h3>
          <ul>
            <li className="nav-item">
              <Link
                to="/setting-student-subscription"
                className={
                  activeMenu === "Subscription" ? "nav-item active" : "nav-item"
                }
              >
                <Calendar size={20} /> My Subscriptions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-billing"
                className={
                  activeMenu === "Billing" ? "nav-item active" : "nav-item"
                }
              >
                <CreditCard size={20} /> Billing Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-payment"
                className={
                  activeMenu === "Payment" ? "nav-item active" : "nav-item"
                }
              >
                <CreditCard size={20} /> Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-invoice"
                className={
                  activeMenu === "Invoice" ? "nav-item active" : "nav-item"
                }
              >
                <Clipboard size={20} /> Invoice
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
