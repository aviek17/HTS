import React from 'react'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs"
import Approvals from "./Components/Approvals"
import Strength from "./Components/Strength"
import Footer from "./Components/Footer"
import ProductPage from "./Components/ProductPage"
import Management from "./Components/OurManagement"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import "./App.css"
import ATScontrol from "./Components/Product/Components/ATSconntrol"
import AutomaticPowerFactor from "./Components/Product/Components/AutomaticPowerfactor"
import AutoTransformer from "./Components/Product/Components/AutoTransformer"
import CandRpanel from "./Components/Product/Components/CandRpanel"
import CapacitorPanel from "./Components/Product/Components/CapacitorPanel"
import FCMASoft from "./Components/Product/Components/FCMAsoft"
import FixedTypeLT from "./Components/Product/Components/FixedTypeLT"
import GasInsulatedSwitchGear from "./Components/Product/Components/GasInsulatedSwitch"
import GeneratorRelay from "./Components/Product/Components/GeneratorRelay"
import HTdol from "./Components/Product/Components/HTdol"
import HTLT from "./Components/Product/Components/HTLT"
import KISOKwind from "./Components/Product/Components/KisokWinDSolar"
import LAVTpanel from "./Components/Product/Components/LAVTpanel"
import LineRelay from "./Components/Product/Components/LineRelay"
import LtPcc from "./Components/Product/Components/LtPCC"
import LTstarter from "./Components/Product/Components/LTstarter"
import MainDistribution from "./Components/Product/Components/MainDistributio"
import MeteringKisok from "./Components/Product/Components/MeteringKisok"
import NGRPanel from "./Components/Product/Components/NGRpanel"
import NGTPanel from "./Components/Product/Components/NGTpanel"
import OffLoadIsolator from "./Components/Product/Components/OffLoadIsolator"
import OnLoadIsolator from "./Components/Product/Components/OnLoadIsolator"
import PanelHydro from "./Components/Product/Components/PanelHydro"
import RemoteControlPanel from "./Components/Product/Components/RemoteControlPanel"
import RingMainUnit from "./Components/Product/Components/RingMainUnit"
import SwitchFuseUnit from "./Components/Product/Components/SwitchFuseUnit"
import SynPanel from "./Components/Product/Components/SynPanel"
import TemperatureScanner from "./Components/Product/Components/TemperatureScanner"
import TransformerRelay from "./Components/Product/Components/TransformerRelay"
import UnitControlDesk from "./Components/Product/Components/UnitControlDesk"
import UnitizedPackaged from "./Components/Product/Components/UnitizedPackaged"
import VaccumContractor from "./Components/Product/Components/VaccumContactor"
import VCB from "./Components/Product/Components/VCB"
import Client from "./Components/Clients"
import ContactUs from "./Components/ContactUs"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/clients">
            <Client />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/products/vaccum">
            <VaccumContractor />
          </Route>
          <Route path="/products/kisok">
            <KISOKwind />
          </Route>
          <Route path="/products/unitizedPackaged">
            <UnitizedPackaged />
          </Route>
          <Route path="/products/fixedTypelT">
            <FixedTypeLT />
          </Route>
          <Route path="/products/automaticPower">
            <AutomaticPowerFactor />
          </Route>
          <Route path="/products/ltPCC">
            <LtPcc />
          </Route>
          <Route path="/products/mainDistribution">
            <MainDistribution />
          </Route>
          <Route path="/products/hydro">
            <PanelHydro />
          </Route>
          <Route path="/products/generatorRelay">
            <GeneratorRelay />
          </Route>
          <Route path="/products/transformerRelay">
            <TransformerRelay />
          </Route>
          <Route path="/products/lineRelay">
            <LineRelay />
          </Route>
          <Route path="/products/synPanel">
            <SynPanel />
          </Route>
          <Route path="/products/lavt">
            <LAVTpanel />
          </Route>
          <Route path="/products/ngt">
            <NGTPanel />
          </Route>
          <Route path="/products/ngr">
            <NGRPanel />
          </Route>
          <Route path="/products/unitControl">
            <UnitControlDesk />
          </Route>
          <Route path="/products/remoteControl">
            <RemoteControlPanel />
          </Route>
          <Route path="/products/fcma">
            <FCMASoft />
          </Route>
          <Route path="/products/htDOL">
            <HTdol />
          </Route>
          <Route path="/products/ltStarter">
            <LTstarter />
          </Route>
          <Route path="/products/crPanel">
            <CandRpanel />
          </Route>
          <Route path="/products/htlt">
            <HTLT />
          </Route>
          <Route path="/products/onLoad">
            <OnLoadIsolator />
          </Route>
          <Route path="/products/offLoad">
            <OffLoadIsolator />
          </Route>
          <Route path="/products/ringMain">
            <RingMainUnit />
          </Route>
          <Route path="/products/switchFuse">
            <SwitchFuseUnit />
          </Route>
          <Route path="/products/meteringK">
            <MeteringKisok />
          </Route>
          <Route path="/products/gasInsulated">
            <GasInsulatedSwitchGear />
          </Route>
          <Route path="/products/capacitor">
            <CapacitorPanel />
          </Route>
          <Route path="/products/autoTrans">
            <AutoTransformer />
          </Route>
          <Route path="/products/tempScan">
            <TemperatureScanner />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/strength">
            <Strength />
          </Route>
          <Route path="/approvals">
            <Approvals />
          </Route>
          <Route path="/management">
            <Management />
          </Route>

          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/products/vcb">
            <VCB />
          </Route>
          <Route path="/products/ats">
            <ATScontrol />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  )
}

export default App