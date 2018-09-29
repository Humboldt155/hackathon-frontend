<template>
    <div>
        <div style="overflow: auto; max-height: 450px; font-size: small">
            <table class="table" >
                <th>Request</th>
                <th>Response</th>
                <th>Type</th>
                <th>Text</th>
                <th>Code</th>
                <th>Offer</th>
                <th>Checked</th>
                <th>To basket</th>
                <tbody >
                <tr> <td>1</td> <td>0</td> <td>text</td> <td>'Hi, Artem! I try to buy a pillow, but it is not awailable on stock(( May you solve my problem?'`</td> <td>81945552</td> <td></td> <td></td><td></td></tr>
                <tr> <td>0</td> <td>1</td> <td>text</td> <td>Do you meen this one?</td> <td>81945552</td> <td></td> <td></td><td></td></tr>
                <tr> <td>1</td> <td>0</td> <td>text</td> <td>Exactly!</td> <td>81945552</td> <td></td> <td></td><td></td></tr>
                <tr> <td>0</td> <td>1</td> <td>text</td> <td>'Wait a minute, please'</td> <td>81945552</td> <td></td> <td></td><td></td></tr>
                <tr> <td>0</td> <td>1</td> <td>text</td> <td>'Unfortunately, there are no such pillows on stock(('</td> <td>81945552</td> <td></td> <td></td><td></td></tr>
                <tr> <td>0</td> <td>1</td> <td>text</td> <td>'But there are some very similar available. Would you like to see?'</td> <td>17926555</td> <td></td> <td></td> <td></td></tr>
                <tr> <td>1</td> <td>0</td> <td>text</td> <td>Yes, sure!</td> <td>17926555</td> <td></td> <td></td> <td></td></tr>
                <tr> <td>0</td> <td>1</td> <td>proposal</td> <td></td> <td>17926555</td> <td>1</td> <td>1</td> <td>0</td> <td></td></tr>
                <tr> <td>1</td> <td>0</td> <td>text</td> <td>I like it, but maybe there are some else?</td> <td>17926555</td> <td></td><td></td> <td></td> <td></td> </tr>
                <tr> <td>0</td> <td>1</td> <td>text</td> <td>Check this one)</td> <td>17926555</td> <td></td> <td></td> <td></td></tr>
                <tr> <td>0</td> <td>1</td> <td>proposal</td> <td></td> <td>81945555</td> <td>1</td> <td>1</td> <td>1</td> </tr>
                <tr> <td></td> <td>1</td> <td>rate</td> <td>4.5</td> <td>81945555</td> <td></td> <td></td> <td></td> </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Statistics",

    }
</script>

<style scoped>

</style>
