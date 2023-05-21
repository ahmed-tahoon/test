import { configureStore } from '@reduxjs/toolkit';
import GetFlightRedux from "./Redux/Flight/Get-Flight-Redux"
import CreateFlightRedux from "./Redux/Flight/Create-Flight-Redux"
import DeletFlightRedux from "./Redux/Flight/Delet-Flight-Redux"
import EditeFlightRedux from "./Redux/Flight/Edite-Flight-Redux"
import CreatesupplierRedux from "./Redux/Suppliers/Create-Supplier-Redux"
import GetsupplierRedux from "./Redux/Suppliers/Get-Supplier-Redux"
import DeletsupplierRedux from "./Redux/Suppliers/Delet-Supplier-Redux"
import EditesupplierRedux from "./Redux/Suppliers/Edite-Supplier-Redux"
import GetOneFlightRedux from "./Redux/Flight/Get-One-Flight-Redux"
import CreateSeatRedux from "./Redux/Seat/Create-Saet-Redux"
import DeletSeatRedux from "./Redux/Seat/Delet-Saet-Redux"
import EditeSeatRedux from "./Redux/Seat/Edite-Saet-Redux"
import GetSeatRedux from "./Redux/Seat/Get-Saet-Redux"
import CreateTwoWayRedux from "./Redux/SeatTwoWay/Create-TwoWay-Redux"
import GetSeatTwoWayRedux from "./Redux/SeatTwoWay/Get-TwoWay-Redux"
import SignInRedux from "./Redux/Auth/SignIn-Redux"
import SignUpRedux from "./Redux/Auth/SignUp-Redux"
import GetcountryRedux from './Redux/Country/Get-Country-Redux'
import DeletcountryRedux from "./Redux/Country/Delet-Country-Redux"
import CreatecountryRedux from "./Redux/Country/Create-Country-Redux"
import EditecountryRedux from "./Redux/Country/Edite-Country-Redux"
import CreateCityRedux from "./Redux/City/Create-City-Redux"
import DeletCityRedux from './Redux/City/Delet-City-Redux'
import EditeCityRedux from "./Redux/City/Edite-City-Redux"
import GetCityRedux from "./Redux/City/Get-City-Redux"
import GetflightCompanyRedux from "./Redux/Company/Get-Company-Redux"
import EditeflightCompanyRedux from "./Redux/Company/Edite-Company-Redux"
import DeletflightCompanyRedux from "./Redux/Company/Delet-Company-Redux"
import CreateflightCompanyRedux from "./Redux/Company/Delet-Company-Redux"
import GetOnecountryRedux from "./Redux/Country/Get-One-Country-Redux"
import GetCountriesRedux from 'Redux/Flight/Get-Countries-Redux'
import GetFlightBasedCompanyHook from "./Redux/Flight/Get-Flight-Based-Comapny-Redux"
import CreatedapartureRedux from "./Redux/daparture-airport/Create-daparture-Redux"
import DeletdapartureRedux from "./Redux/daparture-airport/Delet-daparture-Redux"
import EditedapartureRedux from "./Redux/daparture-airport/Edite-daparture-Redux"
import GetdapartureRedux from "./Redux/daparture-airport/Get-daparture-Redux"
import GetAirPortBasecCityRedux from "./Redux/daparture-airport/Get-Airport-Based-City-Redux"
import AddFlightByCheckBoxtRedux from "./Redux/Flight/Use-Add-Flight-By-CheckBox-Redux"
import GetcountryNavBarRedux from "./Redux/Country/Get-Country-NavBar-Redux"
import EditeTowWayRedux from "./Redux/SeatTwoWay/Edit-TowWay-Redux"
export const store = configureStore({
    reducer: {
        GetFlightRedux: GetFlightRedux,
        GetCountriesRedux: GetCountriesRedux,

        CreateFlightRedux:CreateFlightRedux,
        DeletFlightRedux:DeletFlightRedux,
        EditeFlightRedux:EditeFlightRedux,
        CreatesupplierRedux:CreatesupplierRedux,
        GetsupplierRedux:GetsupplierRedux,
        DeletsupplierRedux:DeletsupplierRedux,
        EditesupplierRedux:EditesupplierRedux,
        GetOneFlightRedux:GetOneFlightRedux,
        CreateSeatRedux:CreateSeatRedux,
        DeletSeatRedux:DeletSeatRedux,
        EditeSeatRedux:EditeSeatRedux,
        GetSeatRedux:GetSeatRedux,
        CreateTwoWayRedux:CreateTwoWayRedux,
        GetSeatTwoWayRedux:GetSeatTwoWayRedux,
        SignInRedux:SignInRedux,
        SignUpRedux:SignUpRedux,
        GetcountryRedux:GetcountryRedux,
        DeletcountryRedux:DeletcountryRedux,
        CreatecountryRedux:CreatecountryRedux,
        EditecountryRedux:EditecountryRedux,
        CreateCityRedux:CreateCityRedux,
        DeletCityRedux:DeletCityRedux,
        EditeCityRedux:EditeCityRedux,
        GetCityRedux:GetCityRedux,
        GetflightCompanyRedux:GetflightCompanyRedux,
        EditeflightCompanyRedux:EditeflightCompanyRedux,
        DeletflightCompanyRedux:DeletflightCompanyRedux,
        CreateflightCompanyRedux:CreateflightCompanyRedux,
        GetOnecountryRedux:GetOnecountryRedux,
        GetFlightBasedCompanyHook:GetFlightBasedCompanyHook,
        CreatedapartureRedux:CreatedapartureRedux,
        DeletdapartureRedux:DeletdapartureRedux,
        EditedapartureRedux:EditedapartureRedux,
        GetdapartureRedux:GetdapartureRedux,
        GetAirPortBasecCityRedux:GetAirPortBasecCityRedux,
        AddFlightByCheckBoxtRedux:AddFlightByCheckBoxtRedux,
        GetcountryNavBarRedux:GetcountryNavBarRedux,
        EditeTowWayRedux:EditeTowWayRedux
    }
})
