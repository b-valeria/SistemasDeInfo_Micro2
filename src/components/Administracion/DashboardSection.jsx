import React from "react";

const DashboardSection = ({ title, children }) => {
  return (
    <section className="dashboard-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
      <style jsx>{`
        .dashboard-section {
          border-radius: 20px;
          border: 10px solid #27034b;
          padding: 20px;
          margin-bottom: 30px;
          background-color: #fff;
        }
        .section-title {
          color: #27034b;
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 30px;
        }
        .section-content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 991px) {
          .dashboard-section {
            margin-bottom: 20px;
          }
          .section-content {
            gap: 15px;
          }
        }
        @media (max-width: 640px) {
          .dashboard-section {
            border-width: 5px;
            padding: 15px;
          }
          .section-title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default DashboardSection;
