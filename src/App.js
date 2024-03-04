import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import CaseManagement from "./screens/CaseManagement";
import Authenticate from "./components/Authenticate";
import { extendTheme, ChakraBaseProvider } from "@chakra-ui/react";
import CaseList from "./screens/CaseList";
import Profile from "./screens/Profile";
import ProfileSettings from "./screens/ProfileSettings";
import CauseList from "./screens/CauseList";
import Trainings from "./screens/Trainings";
import Reports from "./screens/Reports";
import UserManagement from "./screens/UserManagement";
import SetUp from "./screens/SetUp";
import GeneratedReport from "./components/GeneratedReport";
import TeamsTable from "./components/TeamsTable";
import ZonalTable from "./components/ZonalTable";
import TeamMembersTable from "./components/TeamMembersTable";
import CustomTable from "./components/CustomTable";
import CriminalCaseLegalAdviceForm from "./components/CriminalCaseLegalAdviceForm";
import CriminalAppealCourtForm from "./components/CriminalAppealCourtForm";
import CriminalJudgementForm from "./components/CriminalJudgementForm";
import CivilCaseLegalAdviceForm from "./components/CivilCaseLegalAdviceForm";
import CivilJudgementForm from "./components/CivilJudgementForm";
import AssetFreezingForm from "./components/AssetFreezingForm";
import ArrestWarrantForm from "./components/ArrestWarrantForm";
import CourtOfAppealCourtForm from "./components/CourtOfAppealCourtForm";
import CourtofAppealJudgementForm from "./components/CourtofAppealJudgementForm";
import SupremeCourtForm from "./components/SupremeCourtForm";
import SupremeJudgementForm from "./components/SupremeJudgementForm";
import TrainingTable from "./components/TrainingTable";
import UserProfile from "./components/UserProfile";
import UsersTable from "./components/UsersTable";
import DepartmentsTable from "./components/DepartmentsTable";
import RolesTable from "./components/RolesTable";
import Notifications from "./screens/Notifications";
import Login from "./screens/Login";
import Documents from "./screens/Documents";
import DocumentManagement from "./screens/DocumentManagement";

const colors = {
  brand: {
    primary: "#6e0d13",
  },
};

const theme = extendTheme({ colors });


const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<Authenticate />}>
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="case-management" element={<CaseManagement />} />
          <Route
            exact
            path="case-management/criminal-cases"
            element={
              <CaseList
                tabs={["Cases on Legal Advice", "Cases in Court", "Judgement"]}
                panels={[
                  { table: CustomTable, link: "legal-advice", type: "Legal" },
                  { table: CustomTable, link: "appeal-court", type:"Court" },
                  { table: CustomTable, link: "judgement", type: "Judgement"},
                ]}
              />
            }
          />
          <Route
            exact
            path="case-management/civil-cases"
            element={
              <CaseList
                tabs={["Civil Cases", "Case in  Court", "Judgement"]}
                panels={[
                  { table: CustomTable, link: "legal-advice" },
                  { table: CustomTable, link: "appeal-court" },
                  { table: CustomTable, link: "judgement" },
                ]}
              />
            }
          />
          <Route
            exact
            path="case-management/asset-freezing"
            element={
              <CaseList
                tabs={["Asset freezing case"]}
                panels={[{ table: CustomTable, link: "cases" }]}
              />
            }
          />

          <Route
            exact
            path="case-management/arrest-warrant"
            element={
              <CaseList
                tabs={["Arrest warrant"]}
                panels={[{ table: CustomTable, link: "cases" }]}
              />
            }
          />
          <Route
            exact
            path="case-management/court-of-appeal"
            element={
              <CaseList
                tabs={["Cases in court", "Judgement"]}
                panels={[
                  { table: CustomTable, link: "appeal-court" },
                  { table: CustomTable, link: "judgement" },
                ]}
              />
            }
          />
          <Route
            exact
            path="case-management/remand-warrant"
            element={
              <CaseList
                tabs={["Remand warrant case"]}
                panels={[{ table: CustomTable, link: "cases" }]}
              />
            }
          />
          <Route
            exact
            path="case-management/supreme-court-cases"
            element={
              <CaseList
                tabs={["Cases in Court", "Judgement"]}
                panels={[
                  { table: CustomTable, link: "appeal-court" },
                  { table: CustomTable, link: "judgement" },
                ]}
              />
            }
          />
          <Route
            path="case-management/criminal-cases/legal-advice/*"
            element={<CriminalCaseLegalAdviceForm />}
          />
          <Route
            path="case-management/criminal-cases/appeal-court/*"
            element={<CriminalAppealCourtForm />}
          />
          <Route
            path="case-management/criminal-cases/judgement/*"
            element={<CriminalJudgementForm />}
          />
          <Route
            path="case-management/civil-cases/legal-advice/*"
            element={<CivilCaseLegalAdviceForm />}
          />
          <Route
            path="case-management/civil-cases/appeal-court/*"
            element={<CriminalAppealCourtForm />}
          />
          <Route
            path="case-management/civil-cases/judgement/*"
            element={<CivilJudgementForm />}
          />
          <Route
            path="case-management/asset-freezing/cases/*"
            element={<AssetFreezingForm />}
          />
          <Route
            path="case-management/arrest-warrant/cases/*"
            element={<ArrestWarrantForm />}
          />
          <Route
            path="case-management/remand-warrant/cases/*"
            element={<ArrestWarrantForm />}
          />
          <Route
            path="case-management/court-of-appeal/appeal-court/*"
            element={<CourtOfAppealCourtForm />}
          />
          <Route
            path="case-management/court-of-appeal/judgement/*"
            element={<CourtofAppealJudgementForm />}
          />
          <Route
            path="case-management/supreme-court-cases/appeal-court/*"
            element={<SupremeCourtForm />}
          />
          <Route
            path="case-management/supreme-court-cases/judgement/*"
            element={<SupremeJudgementForm />}
          />
          <Route exact path="cause-list" element={<CauseList />} />
          <Route exact path="documents" element={<Documents />} />
          <Route exact path="documents/*" element={<DocumentManagement />} />
          <Route exact path="trainings" element={<Trainings />} />
          <Route exact path="trainings/*" element={<TrainingTable />} />
          <Route exact path="reports" element={<Reports />} />
          <Route
            exact
            path="reports/standard-reports"
            element={<GeneratedReport />}
          />
          <Route exact path="user-management" element={<UserManagement />}>
            <Route index={true} element={<UsersTable />} />
            <Route path="users" element={<UsersTable />} />
            <Route path="departments" element={<DepartmentsTable />} />
            <Route path="roles" element={<RolesTable />} />
          </Route>
          <Route
            exact
            path="user-management/user/*"
            element={<UserProfile />}
          />
          <Route path="set-up" element={<SetUp />}>
            <Route index={true} element={<TeamsTable />} />
            <Route path="teams" element={<TeamsTable />} />
            <Route path="teams/*" element={<TeamMembersTable />} />
            <Route path="zonal-command" element={<ZonalTable />} />
          </Route>
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="profile-settings" element={<ProfileSettings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </ChakraBaseProvider>
  );
};

export default App;
