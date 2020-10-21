import React, { Fragment } from 'react';
import '../../../../assets/components/data-dictionary/data-dictionary.css';
import {
  Collapse,
  CardBody,
  Card,
  CardHeader,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import { IoIosBook } from 'react-icons/io';

class DataDictionaryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleAbbr = this.toggleAbbr.bind(this);
    this.toggleAttr = this.toggleAttr.bind(this);
    this.toggleMetr = this.toggleMetr.bind(this);
    this.state = { abbrOpen: false, attrOpen: false, metrOpen: false };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggleAbbr(e) {
    this.setState({
      abbrOpen: !this.state.abbrOpen,
    });
  }
  toggleAttr(e) {
    this.setState({
      attrOpen: !this.state.attrOpen,
    });
  }
  toggleMetr(e) {
    this.setState({
      metrOpen: !this.state.metrOpen,
    });
  }
  render() {
    return (
      <Fragment>
        <Button color='info' onClick={this.toggle}>
          <IoIosBook color='#ffffff' fontSize='20px' />
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{ maxWidth: '70vw' }}
        >
          <ModalHeader toggle={this.toggle}>
            Analytics Data Dictionary - Metric &amp; Attribute Definitions
          </ModalHeader>
          <ModalBody>
            <Card style={{ marginBottom: '.5rem' }}>
              <CardHeader onClick={this.toggleAbbr}>Abbreviations</CardHeader>
              <Collapse isOpen={this.state.abbrOpen ? true : false}>
                <CardBody>
                  <table class='table table-striped table-hover'>
                    <thead>
                      <tr>
                        <th scope='col'>Abbreviation</th>
                        <th scope='col'>Full Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AR</td>
                        <td>Accounts Receivable</td>
                      </tr>
                      <tr>
                        <td>NPI</td>
                        <td>National Provider Identifier.</td>
                      </tr>
                      <tr>
                        <td>DOB</td>
                        <td>Date of birth.</td>
                      </tr>
                      <tr>
                        <td>DOS</td>
                        <td>Date of service for a bill.</td>
                      </tr>
                      <tr>
                        <td>ICD</td>
                        <td>
                          International Statistical Classification of Disease.
                        </td>
                      </tr>
                      <tr>
                        <td>MRN</td>
                        <td>Medical Record Number.</td>
                      </tr>
                      <tr>
                        <td>OON</td>
                        <td>Out of Network.</td>
                      </tr>
                      <tr>
                        <td>EDI</td>
                        <td>Electronic Data Interchange.</td>
                      </tr>
                      <tr>
                        <td>EOB</td>
                        <td>Explanation of Benefits.</td>
                      </tr>
                      <tr>
                        <td>DNFB</td>
                        <td>Discharge Not Final Billed.</td>
                      </tr>
                      <tr>
                        <td>CPT</td>
                        <td>Current Procedural Terminology.</td>
                      </tr>
                      <tr>
                        <td>HL7</td>
                        <td>Health Level Seven.</td>
                      </tr>
                      <tr>
                        <td>WQ</td>
                        <td>Work Queues.</td>
                      </tr>
                      <tr>
                        <td>DRG</td>
                        <td>Diagnosis Related Groups.</td>
                      </tr>
                      <tr>
                        <td>LOS</td>
                        <td>Length of Stay.</td>
                      </tr>
                      <tr>
                        <td>GMLOS</td>
                        <td>Geometric Mean Length of Stay.</td>
                      </tr>
                      <tr>
                        <td>ALOS</td>
                        <td>Average Length of Stay.</td>
                      </tr>
                    </tbody>
                  </table>
                </CardBody>
              </Collapse>
            </Card>
            {/* Attributes */}
            <Card style={{ marginBottom: '.5rem' }}>
              <CardHeader onClick={this.toggleAttr}>Attributes</CardHeader>
              <Collapse isOpen={this.state.attrOpen ? true : false}>
                <CardBody>
                  <table class='table table-striped table-hover'>
                    <thead>
                      <tr>
                        <th scope='col'>Attribute</th>
                        <th scope='col'>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amount Billed</td>
                        <td>
                          The total charges billed month to date on any given
                          day. This can be validated by pulling up the
                          production report using the{' '}
                          <b>
                            billing datefilter option choosing the date range 1
                            <sup>st</sup> of the month through present day.
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>Denial Rate</td>
                        <td>
                          It is the percentage of claims with claim status
                          "denied" against the total number of claims billed in
                          the 837 file.
                        </td>
                      </tr>
                      <tr>
                        <td>Amount Paid</td>
                        <td>
                          The total payments received month to date on any given
                          day. This can be validated by pulling up the
                          production report using the{' '}
                          <b>
                            payment datefilter option choosing the date range 1
                            <sup>st</sup> of the month through present day.
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>Claim Activity</td>
                        <td>
                          The total number of samples processed in a given day.
                          In other terms, the number of claims touched in the
                          current day by the posting team. This can be validated
                          by pulling up the production report using the{' '}
                          <b>
                            posting datefilter option entering the current date
                            in both FROM and TO date range.
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>Claim Activity (from previous business day)</td>
                        <td>
                          It is the total claims submitted for previous business
                          day.
                        </td>
                      </tr>
                      <tr>
                        <td>Adjudication Rate</td>
                        <td>
                          The rate of processed claims to total claims on a per
                          diem basis. Only claims that involve insurance are
                          included in this calculation. It’s the percentage of
                          claims processed against claims submitted.
                        </td>
                      </tr>
                      <tr>
                        <td>Adjudication Rate (121-210 days)</td>
                        <td>
                          It’s the percentage of claims processed against claims
                          submitted between last 121-210 days.
                        </td>
                      </tr>
                      <tr>
                        <td>On Hold Claims</td>
                        <td>
                          The overall count samples ON HOLD on a given day
                          irrespective of the day these were added to the
                          system. This can be validated by pulling up the
                          production report using the{' '}
                          <b>
                            date addedfilter option for all the samples HOLD
                            till date.
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>On Hold Claims (from previous week)</td>
                        <td>
                          The overall count samples ON HOLD from the previous
                          week irrespective of the day these were added to the
                          system.
                        </td>
                      </tr>
                      <tr>
                        <td>Patient Responsibility Amount</td>
                        <td>
                          Sum of the patient responsibility amount per the 835
                          file against claims submitted in the 837 file.
                        </td>
                      </tr>
                      <tr>
                        <td>Benchmark- prior week</td>
                        <td>
                          Prior week benchmark uses the on-hold count from 5
                          business days.
                        </td>
                      </tr>
                      <tr>
                        <td>Medicare Payment</td>
                        <td>
                          Sum of the amount paid for claims with primary
                          provider Medicare as insurer named.
                        </td>
                      </tr>
                      <tr>
                        <td>Top 5 Payers</td>
                        <td>
                          Graph of the top 5 payers within a given/selected
                          period of time.
                        </td>
                      </tr>
                      <tr>
                        <td>Services Paid (outpatient)</td>
                        <td>Total amount paid for outpatient services.</td>
                      </tr>
                      <tr>
                        <td>Services Paid (inpatient)</td>
                        <td>Total amount paid for inpatient services.</td>
                      </tr>
                      <tr>
                        <td>Top 5 Services Paid</td>
                        <td>
                          List of the top five services paid for
                          inpatient/outpatient/Medicare respectively.
                        </td>
                      </tr>
                      <tr>
                        <td>Top 5 Services By Payer</td>
                        <td>List of the top five services by insurer.</td>
                      </tr>
                      <tr>
                        <td>Expected Reimbursement</td>
                        <td>
                          On the Inpatient Dashboard, claims billed in a given
                          timeframe regardless of date of service. It is
                          calculated using the facility’s payer contracts and
                          terms.
                        </td>
                      </tr>
                      <tr>
                        <td>Total Amount Billed</td>
                        <td>
                          The total of the claims billed in a given period of
                          time regardless of date of service. It is calculated
                          by using the trailing 3-month average from the first
                          day of each month through the nth day, where n is the
                          number of the day of the current month.
                        </td>
                      </tr>
                      <tr>
                        <td>Average Days to Bill</td>
                        <td>
                          Average of day different between date of billing and
                          date of service.
                        </td>
                      </tr>
                      <tr>
                        <td>Billed Count</td>
                        <td>Count of bills claimed for the month.</td>
                      </tr>
                      <tr>
                        <td>Top 5 DRGs – Net revenue per patient</td>
                        <td>Net revenue per DRG code</td>
                      </tr>
                    </tbody>
                  </table>
                </CardBody>
              </Collapse>
            </Card>
            {/* Metrics */}
            <Card style={{ marginBottom: '.5rem' }}>
              <CardHeader onClick={this.toggleMetr}>Metrics</CardHeader>
              <Collapse isOpen={this.state.metrOpen ? true : false}>
                <CardBody>
                  <table class='table table-striped table-hover'>
                    <thead>
                      <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>% Observation Admission</td>
                        <td>The percentage of observation admissions</td>
                      </tr>
                      <tr>
                        <td>30 Day Readmit Rate</td>
                        <td>
                          The number patients discharged by a provider who have
                          a subsequent admission within 30 days, divided by the
                          total number of discharges by that provider.&nbsp;
                          Based on patients with a discharge date during
                          reporting period.
                        </td>
                      </tr>
                      <tr>
                        <td>Avg Days to Readmission</td>
                        <td>
                          The number of days between the initial admission and
                          the subsequent readmission for all patients with a
                          readmit date during the selected time period
                        </td>
                      </tr>
                      <tr>
                        <td>Bill Category</td>
                        <td>
                          The description of a bill category (ie: Admission,
                          Observation, Consult) derived from the claims file.
                        </td>
                      </tr>
                      <tr>
                        <td>Charge Processing Time</td>
                        <td>
                          The number of days between charge create date to
                          charge sent date.&nbsp; Based on charges with a sent
                          date within selected period.
                        </td>
                      </tr>
                      <tr>
                        <td>Charges</td>
                        <td>
                          The total number of charges (as determined by date of
                          service) within the selected reporting period.&nbsp; A
                          date of service can have one or more charges within a
                          reporting period.&nbsp; 1 charge = 1 CPT Code
                        </td>
                      </tr>
                      <tr>
                        <td>Length of Stay</td>
                        <td>
                          The total number of days between date of admission and
                          date of discharge.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardBody>
              </Collapse>
            </Card>
          </ModalBody>
          <ModalFooter>
            {/* <Button color='link' onClick={this.toggle}>
              Cancel
            </Button> */}
            <Button color='info' onClick={this.toggle}>
              Cancel
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default DataDictionaryModal;
