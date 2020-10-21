import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import TopRow from "./Examples/TopRow";
import FullWidthBar from "./Examples/FullWidthBar";

import PageTitle from "../../Layout/AppMain/PageTitle";
import BottomRow from "./Examples/BottomRow";
//Used to format numbers with an abbreviation: K (thousands) and M (Millions)
function numericalFormatter(num) {
  return num > 999
    ? num > 999999999
      ? (num / 1000000000).toFixed(2) + "B"
      : num > 999999
      ? (num / 1000000).toFixed(2) + "M"
      : (num / 1000).toFixed(2) + "K"
    : parseFloat(num).toFixed(0);
}

const BillingDashboard = () => {
  const [kpiData, setKpiData] = useState({});
  const [chartData, setChartData] = useState({});
  const [underpaymentData, setUnderPaymentData] = useState({});
  const [CPTCodeData, setCPTCodeData] = useState({});
  const [topServicesPayerData, setTopServicesPayerData] = useState({});

  const chart = () => {
    let monthData = [];
    let billedData = [];
    let paidData = [];
    let deniedData = [];
    let patientRespData = [];
    let underpaymentLabels = [];
    let underpaymentData = [];
    let CPTLabels = [];
    let CPTData = [];
    let servicesPayerLabel = [];
    let servicesPayerData = [];

    axios
      .get(
        "https://dev-emrreporting.axcension.com/api/dashboard/getfinancialchartitems/asc/imedx/all"
      )
      .then((response) => {
        //console.log(response);
        let months = response.data[1].SeriesValue.split(",");
        let billed = response.data[5].SeriesValue.split(",");
        let paid = response.data[9].SeriesValue.split(",");
        let denied = response.data[7].SeriesValue.split(",");
        let patientResp = response.data[9].SeriesValue.split(",");
        let underPayment = response.data[52].SeriesValue.split(",");
        let CPTCode = response.data[46].SeriesValue.split(",");
        let topServicesPayed = response.data[27].SeriesValue.split(",");

        for (let i = 0; i < 12; i++) {
          monthData[i] = months[i];
          billedData[i] = parseInt(billed[i]);
          paidData[i] = parseInt(paid[i]);
          deniedData[i] = parseInt(denied[i]);
          patientRespData[i] = parseInt(patientResp[i]);
        }

        for (let i = 0; i < 5; i++) {
          underpaymentData[i] = underPayment[i].split("|")[1];
          underpaymentLabels[i] = underPayment[i].split("|")[0];
        }

        for (let i = 0; i < 5; i++) {
          CPTData[i] = CPTCode[i].split("|")[1];
          CPTLabels[i] = CPTCode[i].split("|")[0];
        }

        for (let i = 0; i < 5; i++) {
          servicesPayerData[i] = topServicesPayed[i].split("|")[1];
          servicesPayerLabel[i] = topServicesPayed[i].split("|")[0];
        }

        setChartData({
          labels: monthData,
          datasets: [
            {
              backgroundColor: "#30b1ff",
              borderWidth: 1,
              //hoverBackgroundColor: "rgba(255,99,132,0.4)",
              //hoverBorderColor: "rgba(255,99,132,1)",
              borderCapStyle: "round",
              label: "Billed",
              data: billedData,
            },
            {
              backgroundColor: "yellow",
              borderWidth: 1,
              //hoverBackgroundColor: "rgba(255,99,132,0.4)",
              //hoverBorderColor: "rgba(255,99,132,1)",
              borderCapStyle: "round",
              label: "Paid",
              data: paidData,
            },
            {
              backgroundColor: "red",
              borderWidth: 1,
              //hoverBackgroundColor: "rgba(255,99,132,0.4)",
              //hoverBorderColor: "rgba(255,99,132,1)",
              borderCapStyle: "round",
              label: "Denied",
              data: deniedData,
            },
            {
              backgroundColor: "purple",
              borderWidth: 1,
              //hoverBackgroundColor: "rgba(255,99,132,0.4)",
              //hoverBorderColor: "rgba(255,99,132,1)",
              borderCapStyle: "round",
              label: "Patient Resp",
              data: patientResp,
            },
          ],
        });

        setUnderPaymentData({
          labels: underpaymentLabels,
          datasets: [
            {
              backgroundColor: ["#30b1ff", "#82ca9d", "#d92550", "#cc65fe"],
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              borderCapStyle: "round",
              data: underpaymentData,
            },
          ],
        });

        setCPTCodeData({
          labels: CPTLabels,
          datasets: [
            {
              data: CPTData,
              backgroundColor: ["#8dace7", "#71deb9", "#ef869e", "#cc65fe"],
              hoverBackgroundColor: [
                "#7097e1",
                "#4dd6a7",
                "#eb6886",
                "#cc65fe",
                "#ffce56",
              ],
            },
          ],
        });

        setTopServicesPayerData({
          labels: servicesPayerLabel,
          datasets: [
            {
              data: servicesPayerData,
              backgroundColor: ["#8dace7", "#71deb9", "#ef869e", "#cc65fe"],
              hoverBackgroundColor: [
                "#7097e1",
                "#4dd6a7",
                "#eb6886",
                "#cc65fe",
                "#ffce56",
              ],
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const kpi = () => {
    let billedAmount = 0;
    let paidAmount = 0;
    let deniedAmount = 0;
    let AR90Amount = 0;

    axios
      .get(
        "https:/dev-emrreporting.axcension.com/api/dashboard/getchartitems/imedx/all"
      )
      .then((response) => {
        console.log(response.data);

        let billedAmountData = response.data[6].SeriesValue.split(",");
        let deniedAmountData = response.data[12].SeriesValue.split(",");
        let paidAmountData = response.data[10].SeriesValue.split(",");
        let AR90amountData = response.data[22].SeriesValue.split(",");

        for (let num of billedAmountData) {
          billedAmount += parseInt(num);
        }

        for (let num of paidAmountData) {
          paidAmount += parseInt(num);
        }

        for (let num of deniedAmountData) {
          deniedAmount += parseInt(num);
        }

        for (let num of AR90amountData) {
          AR90Amount += parseInt(num.split("|")[1]);
        }

        setKpiData({
          amountBilled: numericalFormatter(billedAmount),
          amountPaid: numericalFormatter(paidAmount),
          amountDenied: numericalFormatter(deniedAmount),
          AR90: numericalFormatter(AR90Amount),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
    kpi();
  }, []);
  return (
    <Fragment>
      <CSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <PageTitle
          heading="Billing Dashboard"
          subheading=""
          icon="pe-7s-graph opacity-6"
        />
        <TopRow data={kpiData} />
        <FullWidthBar name="Historical Claim Trends" data={chartData} />
        {/* Bottom Row */}
        <BottomRow
          underPaymentData={underpaymentData}
          CPTCodeData={CPTCodeData}
          topServicesPayerData={topServicesPayerData}
        />
        {/* Bottomn Card End */}
      </CSSTransitionGroup>
    </Fragment>
  );
};
export default BillingDashboard;
