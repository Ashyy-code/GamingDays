import { createStore } from "vuex";
export default createStore({
    state(){
        return{
            //Endpoints
            day_report_endpoint_url:'https://ashypls-001-site1.ftempurl.com/apps/gamingdays/report/?report=day',
            peepee_report_endpoint_url:'https://ashypls-001-site1.ftempurl.com/apps/gamingdays/report/?report=peepees',
            keyphrase_report_endpoint_url:'https://ashypls-001-site1.ftempurl.com/apps/gamingdays/report/?report=phrases',
            keyphrase_report_breakdown_endpoint_url:'https://ashypls-001-site1.ftempurl.com/apps/gamingdays/report/?report=keyphrases',
            keyphrase_insert_url:'https://ashypls-001-site1.ftempurl.com/apps/gamingdays/report/default.aspx/insertPhrase',
            navigation_endpoint_url:'https://ashypls-001-site1.ftempurl.com/apps/gamingdays/report/navItems.aspx',

            //nav
            currentView:'/'
        }
    }
})