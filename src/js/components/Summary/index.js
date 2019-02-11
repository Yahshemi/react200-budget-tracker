import { connect } from "react-redux";
import Summary from "./Summary";

function mapStoretoProps(store) {
    return{
    expenseItems: store.expense.lineItems,
    incomeItems: store.income.lineItems

    };
}
export default connect (mapStoretoProps) (Summary);
