var jafraGlobal = {
    init: function (settings) {
        jafraGlobal.config = {
            emailReg: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            alphabetReg: /^[A-Za-z -]{2,20}$/,
            phoneReg: /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/,
            cardReg: /^[A-Za-z ]{3,20}$/,
            mask: new RegExp('^[0-9a-zA-Z\- \/_?:.,\s]*$'),
            alphaNumeric: new RegExp('^[A-Za-z0-9]*$'),
            alphaNumericSpace: new RegExp('^[A-Za-z0-9 ]*$'),
            alpha: new RegExp('^[A-Za-z -]*$'),
            numeric: new RegExp('^[0-9]*$'),
            jcskey: ["-----BEGIN PGP PUBLIC KEY BLOCK-----",
    "Version: GnuPG v1",
    "",
    "mQINBFQky5sBEADTdP00khAWlMP6sa1F+CxUmk9gwvytanRW68yPiJPozCF+dbpu",
    "fRn7JQEMZEzn07D4BZrTulTYiaC5EkrTOvCb3q+f9ghVygerUE/3W9FSkDFjIFVX",
    "fDzDyeNfbQrvvZn+3VMcvJ/KA8zaoy404md/u/FFxiUCmaAdgFhgA06cpzaeZ32D",
    "ETiggcSWbgZpa+jJ8BKRuGepdudnPkrQD3ZeVJUkWYw4qQKJMS9GtcLoIR3169gy",
    "4RHxA4q7h4OcxitXJCPZjwwFqwv0rUK9I7SKicM6vMZ8wEHdf1JCyflS+c5OgMzW",
    "htKf75PVegILPscDEhwrqDZieSRQupYKFOrZv/ot9HEtY5J6raCFShCmQm22pgsW",
    "YkXC/hbMOGMxd8AzigFE1vF2+9DQmliIHpnuGsKaMKU58BBvwQqIfWOwCJxFASsb",
    "noGZJMV4nNK5fvV3qHhozwPoVDGPpQ2LwVs67O0r9B0N9S2uOuxIIJnRnEW+l2bv",
    "ruRITdg1oD2zcsU2V8+QfOmqN262maojoZD12CMv3pySv9hms0o4+xwjtVk505kn",
    "P47ar5a2lihT4/RpJ+ry9PHpJqZ4MGRzlDhWn88CDQZ1kAbr4/nDnCpSwx9kVJly",
    "nwuKKvuxP8nVMBaMEM7EWkzJt2VVdmLHEC2oWHk+e+zR3omVuoGddV1eOQARAQAB",
    "tCtKYWZyYSBUZXN0IEtleXMgKFRFU1QgT05MWSkgPGRldkBqYWZyYS5jb20+iQI+",
    "BBMBAgAoBQJUJMubAhsDBQkHhM4ABgsJCAcDAgYVCAIJCgsEFgIDAQIeAQIXgAAK",
    "CRAQkgBGDOdQdsXjD/sEJuClBwEYPUEMy2aL8ysslDbgvchzzTBiCsBo3AhBXcLp",
    "7Y+3VfVEWIUjfxs6Wbe09BsF8CvwLrVHOMDfrrraygeWcJgKc43vsbHJLFhtYLv/",
    "0zty200KxV8x3D2t4yQo+fo0oEmaS8PO3m//OZ3YhSoup0BdirpdeNF1YJQOs1Ta",
    "waQ1HJT/iWScwvkiTKyfgxHl3BTYJdjjA65NeeHJtBVH7y6B8eqhYLb3JZe9rfu4",
    "mgDJ6jNLDBc6pc1ZG395x5joWliA3Xu7UjvCOlVVQlOMy8hRSmnMYjVUy9d53shG",
    "V2pdibAYwBDqPOuic5ALvA/MmKKJeX/xZpr8kuInPuo9xRERapRo9DY0Aekf0dJx",
    "eLKo/9sj7EvPD+YNUNFCL85DWa5MlvZAsuPudxIaRA1iG/YOn14DsCnGkE47nATI",
    "4cWB948Un8V6M12JmeMXB/s2HsX43swaAwXpuzeJxBXSVUvfrRQtQFQmZHohZsLh",
    "Z1uq9ZdF1Rci3XhFy4bae4u5Dj2xl7yf5WKFSyzW2IesOoSpkJwX+dTBQxYrL/jv",
    "s6wWypnsjGWyD1/jSdN3DFa/MPHeqFFgLEeXef9bfX0CLcerNlC2Mp6ypbi78NyT",
    "xYT4BWWnqkICBjpKqd8BSMoY3f1sceNO+GmJ9BU/POHnBE2v4zYbG1ndwFMZjbkC",
    "DQRUJMubARAAvEO4HEvEePQEdRqBjl1XQSeofcFMkyxwwB1EiBQZyqLZpkjEqfmh",
    "IK2O4dLMNr9q5LG8yxoV7bVsjums2hsRe5ANn0O+OOEkhY5rF9u5gh81UOpKApHt",
    "dozmNd5diS1grkFflSKvVvOXcFWKOr8cWSvl9v6AFQ0TidAwinp1JVgXyn/QBR7e",
    "GXFL6j1kUM3sRiTjW7DGC5fufyUuz3ptkCeq1+FoBc6pwaiMOeLGgSo4XGwbi9S1",
    "qvK5kU5bMXMiZZClwwj0OsTXhfw6S8dSkE64FOH1YN+bkzZh3q3WT8+5IphKH6Wu",
    "MIebSPT6bnhYJNkIcJ8VBY4OH47H8SQjqLkcGltiHQ4G/6KEG4DXeOC7We65v2nv",
    "qiIi9H6vPydsOJqTlVGyUl3y8ENkNRIpHvSSfLx3tPld7/4W0cqWNh7Dy/Kbnbei",
    "e4K9wExfBmogH9Ulv+tfiOd8PRvdbjx4WZ/Z9bGQkYoDvp22HRi8mN1k3z3RPro+",
    "HuXN67euVqKTcdqRPCFstgByaHJgEOSwsHSDNI8mxMQ4WJTddMcx+yyNUaeK8CFQ",
    "TLOzri+LaOW3vNHMhcVoMeMjzq0NeWOeM1xr3VZb/EpzuThZsMv/178T4htwYgqT",
    "ucrFLjzA2YSpAeWY3Sja42/YNeyPO1cbrGkavUaM3d606K6NnUmP2AMAEQEAAYkC",
    "JQQYAQIADwUCVCTLmwIbDAUJB4TOAAAKCRAQkgBGDOdQds7rD/0eyBDTiwiTuFb5",
    "L2tVRhJ/Rb/mu+1dI2UKKO49vL9WR0+W0kpwmfxzMM7SeHv7oMXU9KGvisy7mnlC",
    "zWYVS7TwoSOvry7zWxvFoVDrUTwY1CGbGoR/zgiX+P85eT8b0vKvtS1j9w8oeav0",
    "J2kWUr/8CfTLXcdqsITRAVdfrkxxmhq98G8i6+Mlbucc+uL06aultihANqovJyAG",
    "/rJWmwmmu26tILOMBVgDojiKSGQ3uB6H2EPuVQoQWQaWBSPPAQW/AWfEPFtB3fEF",
    "m8xEfedAfdewvKv+2iR//TlRB7ofH/Ti7fU0j88W7H/Km96oJbdf/oiIhQJiDNPQ",
    "OdC8VPeZ2dAL8007Nr/155aCxt3GTTf07cIePKzGNS1QIiImkVN3A2sDwp9Gh7EQ",
    "s45R32/Gu9SSMlQrKKRiGYeJf58rDPhGo9B3Mp8nT24OKjqdYFhe+TNsWOGKPKWD",
    "X+7dngwN0+t3G4/NbIKkHJr7mkhA+9MK5nhBTIeTclFmqYmquHMYVjpnIA2r0Ik4",
    "+suYFTwEcA22t2jc3+zzKg6qqk+z3Rgl4YIKAO7EHBqqTOA6K1ckaV5cjGEeDQg/",
    "0kLeaIsAcE17RhCPTAtOuxLaFNA7coFzCN2zIJvsaQw7sd3+UvEo4sL58DdTJwJ6",
    "YPxuUDQHu0aR58vdYj4E/LXBH4Y3Yw==",
    "=jeuV",
    "-----END PGP PUBLIC KEY BLOCK-----"]
        };
        // Allow overriding the default config
        $.extend(jafraGlobal.config, settings);
        jafraGlobal.Setup();
    },
    Setup: function () {
        $.ajaxSetup({ cache: false });
        $("#PlaceOrder").on("click", jafraGlobal.EncryptCreditCard);
        $("#btnRegister").on("click", jafraGlobal.VerifyEmail);
        $("#foundAddSave").on("click", jafraGlobal.ChangeAddress);
        $("#btnChangeConsultant").on("click", jafraGlobal.ChangeConsultant);
        $("#btnCreateaccount").on("click", jafraGlobal.VerifyClient);
        $("#btnMobileChangeConsultant").on("click", jafraGlobal.ChangeMobileConsultant);
        $("#btnAccountUpdate").on("click", jafraGlobal.VerifyAccountShippingAddress);
        $("#foundAccountAddSave").on("click", jafraGlobal.ChangeAccountShippingAddress);
        $(".alphaNumeric").regexMask(jafraGlobal.config.alphaNumeric);
        $(".miscellaneous").regexMask(jafraGlobal.config.mask);
        $(".alpha").regexMask(jafraGlobal.config.alpha);
        $(".numeric").regexMask(jafraGlobal.config.numeric);
        $(".alphaNumericSpace").regexMask(jafraGlobal.config.alphaNumericSpace);
        $("#submitMessage").on("click", jafraGlobal.VerifyContactEmail);
        $(".lodingIcon").on("click", jafraGlobal.LoadingIcon);
    },
    EncryptCreditCard: function () {

        var creditCard = JSON.stringify({
            "name": $("#txtCardHolderName").val(),
            "card": $("#txtCardNumber").val(),
            "expMonth": $("#ddlMonth").val(),
            "expYear": $("#ddlYear").val(),
            "cvv": $("#txtSecurityCode").val(),
            "cardType": $("#ddlPaymenTtype").val()
        });

        if ($("#txtCardNumber").val() != "") {
            var publicKey = openpgp.key.readArmored(jafraGlobal.config.jcskey.join("\n"));
            var encrypted = openpgp.encryptMessage(publicKey.keys, creditCard);
            encrypted = $.trim(encrypted);
            $("#hydEncrptCreditCard").val(encodeURIComponent(encrypted));
        }
        if ($("#hydJCSShippingAddressId").val() == "") {
            jafraGlobal.VerifyShippingAddress();
        }
        else {
            $("#btnSProcessOrder").click();
        }
        return false;
    },
    VerifyEmail: function () {

        $("#continue").show();
        $("#error").hide();
        if (!$('body').hasClass('called')) {
            $('body').addClass('called');
            var email = $("#txtEmailAddress").val();
            $.ajax({
                url: '/RProcess.asmx/VerifyEmail',
                contentType: "application/json; charset=utf-8",
                error: function () {

                },
                data: "{'email':'" + email + "'}",
                dataType: 'json',
                success: function (data) {
                    var obj = $.parseJSON(data.d);
                    if (obj.Progress == 'Success') {
                        $("#hydButton").click();
                    }

                    else {
                        $("#continue").hide();
                        $("#error").show();
                        $("#errorEmail").empty();
                        $("#errorEmail").text(obj.Progress);
                        return false;
                    }
                },
                complete: function (xhr, status) {
                    $("#continue").hide();
                    $('body').removeClass('called');
                },
                type: 'POST'

            });
        }
        return false;
    },

    VerifyContactEmail: function () {
        if (Page_ClientValidate("ContactUs")) {
            $("#continue").show();
            $("#error").hide();
            if (!$('body').hasClass('called')) {
                $('body').addClass('called');
                var email = $("#txtEmailAddress").val();
                $.ajax({
                    url: '/RProcess.asmx/VerifyEmail',
                    contentType: "application/json; charset=utf-8",
                    error: function () {

                    },
                    data: "{'email':'" + email + "'}",
                    dataType: 'json',
                    success: function (data) {
                        var obj = $.parseJSON(data.d);
                        if (obj.Progress == 'Success') {
                            $("#contactSubmit").click();
                        }
                        else {
                            $("#continue").hide();
                            $("#error").show();
                            $("#errorEmail").empty();
                            $("#errorEmail").text(obj.Progress);
                            return false;
                        }
                    },
                    complete: function (xhr, status) {
                        $("#continue").hide();
                        $('body').removeClass('called');
                    },
                    type: 'POST'

                });
            }
        }
        return false;
    },
    VerifyShippingAddress: function () {
        $("#changeAddress").val("0");
        $("#errorBill").hide();
        $("#continueShip").show();
        $("#errorShip").hide();
        var shippingObj = "{'Addressline1':'" + $("#txtShippingAddess1").val() + "', 'Addressline2':'" + $("#txtShippingAddess2").val() + "', 'City':'" + $("#txtShippingCity").val() + "', 'State':'" + $("#ddlShippingState").val() + "', 'ZipCode':'" + $("#txtShippingZipCode").val() + "' }";
        $.ajax({
            url: '/RProcess.asmx/AddressVerification',
            contentType: "application/json; charset=utf-8",
            error: function () {
            },
            data: "{'shippingAddress':" + JSON.stringify(shippingObj) + "}",

            dataType: 'json',
            success: function (data) {
                var obj = $.parseJSON(data.d);
                if (obj.Progress == 'Success') {
                    if ($("#chkSameBillingShipping").is(':checked')) {
                        $("#continueShip").hide();
                        $("#errorBill").hide();
                        $("#btnSProcessOrder").click();
                    }
                    else {
                        jafraGlobal.VerifyBillingAddress();
                    }
                }
                else if (obj.Progress == 'ChangedAddress') {
                    $("#shippingAddress1").html(obj.AddressLine1);
                    $("#shippingAddress2").html(obj.AddressLine2);
                    $("#shippingCity").html(obj.City);
                    $("#shippingStateProvinceRegion").html(obj.State);
                    $("#shippingZipPostalCode").html(obj.ZIPCode);
                    $("#addMessage").html(obj.Message);
                    $('#modelChangeAddress').modal('show');
                    $("#continueShip").hide();

                }
                else if (obj.Progress == 'Invalid address') {
                    $("#errorShippingAddress").empty();
                    $("#errorShippingAddress").text(obj.Progress);
                    $("#errorShip").show();
                    $("#continueShip").hide();
                }
                else {
                    $("#errorShippingAddress").empty();
                    $("#errorShippingAddress").text(obj.Message);
                    $("#errorShip").show();
                    $("#continueShip").hide();
                    return false;
                }
            },
            complete: function (xhr, status) {

            },
            error: function () {
                $("#errorShip").show();
                $("#continueShip").hide();
                return false;
            },
            type: 'POST'
        });
    },
    VerifyAccountShippingAddress: function () {

        if (Page_ClientValidate("Order")) {

            $('body').addClass('calledChange');
            $("#continueShip").show();
            $("#errorShip").hide();
            var shippingObj = "{'Addressline1':'" + $("#txtAccountAddress1").val() + "', 'Addressline2':'" + $("#txtAccountAddess2").val() + "', 'City':'" + $("#txtAccountCity").val() + "', 'State':'" + $("#ddlAccountDropDown").val() + "', 'ZipCode':'" + $("#txtAccountZip").val() + "' }";
            if (!$('body').hasClass('called')) {

                $.ajax({
                    url: '/RProcess.asmx/AddressVerification',
                    contentType: "application/json; charset=utf-8",
                    error: function () {
                    },
                    data: "{'shippingAddress':" + JSON.stringify(shippingObj) + "}",

                    dataType: 'json',
                    success: function (data) {
                        var obj = $.parseJSON(data.d);
                        if (obj.Progress == 'Success') {
                            $('body').removeClass('called');
                            $("#btnProcessAccountAddress").click();
                        }
                        else if (obj.Progress == 'ChangedAddress') {
                            $("#shippingAddress1").html(obj.AddressLine1);
                            $("#shippingAddress2").html(obj.AddressLine2);
                            $("#shippingCity").html(obj.City);
                            $("#shippingStateProvinceRegion").html(obj.State);
                            $("#shippingZipPostalCode").html(obj.ZIPCode);
                            $("#addMessage").html(obj.Message);
                            $('#modelChangeAddress').modal('show');
                            $("#continueShip").hide();

                        }
                        else if (obj.Progress == 'Invalid address') {
                            //$("#errorShippingAddress").empty();
                            //$("#errorShippingAddress").text(obj.Progress);
                            $("#errorShip").show();
                            $("#continueShip").hide();
                            $('body').removeClass('called');
                        }
                        else {
                            //$("#errorShippingAddress").empty();
                            //$("#errorShippingAddress").text(obj.Message);
                            $("#errorShip").show();
                            $("#continueShip").hide();
                            $('body').removeClass('called');
                            return false;
                        }
                    },
                    complete: function (xhr, status) {
                        $('body').removeClass('called');
                    },
                    error: function () {
                        $("#errorShip").show();
                        $("#continueShip").hide();
                        $('body').removeClass('called');
                        return false;
                    },
                    type: 'POST'
                });
            }
        }
        return false;
    },
    ChangeAccountShippingAddress: function () {

        $("#txtAccountAddress1").val($("#shippingAddress1").html());
        $("#txtAccountAddess2").val($("#shippingAddress2").html());
        $("#txtAccountCity").val($("#shippingCity").html());
        $("#ddlAccountDropDown").val($("#shippingStateProvinceRegion").html());
        $("#txtAccountZip").val($("#shippingZipPostalCode").html());

        $('#modelChangeAddress').modal('hide');
        initCustomForms();
        return false;
    },
    VerifyBillingAddress: function () {

        $("#errorBill").hide();
        $("#vlaidationProcess").empty();
        $("#vlaidationProcess").text("Validating billing Address....");
        var billingObj = "{ 'Addressline1':'" + $("#txtBillingAddress1").val() + "', 'Addressline2':'" + $("#txtBillingAddress2").val() + "', 'City':'" + $("#txtBillingCity").val() + "', 'State':'" + $("#ddlBillingState").val() + "', 'ZipCode':'" + $("#txtBillingShippingZipCode").val() + "' }";
        $.ajax({
            url: '/RProcess.asmx/AddressVerification',
            contentType: "application/json; charset=utf-8",
            error: function () {
            },
            data: "{'shippingAddress':" + JSON.stringify(billingObj) + "}",

            dataType: 'json',
            success: function (data) {
                var obj = $.parseJSON(data.d);

                if (obj.Progress == 'Success') {
                    $("#continueShip").hide();
                    $("#errorBill").hide();
                    $("#btnSProcessOrder").click();

                }
                else if (obj.Progress == 'ChangedAddress') {
                    $("#shippingAddress1").html(obj.AddressLine1);
                    $("#shippingAddress2").html(obj.AddressLine2);
                    $("#shippingCity").html(obj.City);
                    $("#shippingStateProvinceRegion").html(obj.State);
                    $("#shippingZipPostalCode").html(obj.ZIPCode);
                    $("#addMessage").html(obj.Message);
                    $('#modelChangeAddress').modal('show');
                    $("#continueShip").hide();
                    $("#changeAddress").val("1");
                    $("#errorBill").hide();
                }
                else if (obj.Progress == 'Invalid address') {
                    $("#errorBill").show();
                    $("#errorBillingAddress").empty();
                    $("#errorBillingAddress").text(obj.Progress);
                    $("#continueShip").hide();
                }
                else {
                    $("#errorBill").show();
                    $("#errorBillingAddress").empty();
                    $("#errorBillingAddress").text(obj.Message);
                    $("#continueShip").hide();
                    return false;
                }
            },
            complete: function (xhr, status) {

            },
            error: function () {
                $("#errorBill").show();
                $("#continueShip").hide();
            },
            type: 'POST'
        });
    },
    ChangeAddress: function () {
        if ($("#changeAddress").val() == "0") {
            $("#txtAddressLine1").val($("#shippingAddress1").html());
            $("#txtAddressLine2").val($("#shippingAddress2").html());
            $("#txtShipingCity").val($("#shippingCity").html());
            $("#shippingState").val($("#shippingStateProvinceRegion").html());
            $("#txtShippingZip").val($("#shippingZipPostalCode").html());

            $("#txtShippingAddess1").val($("#shippingAddress1").html());
            $("#txtShippingAddess2").val($("#shippingAddress2").html());
            $("#txtShippingCity").val($("#shippingCity").html());
            $("#ddlShippingState").val($("#shippingStateProvinceRegion").html());
            $("#txtShippingZipCode").val($("#shippingZipPostalCode").html());
            if ($("#chkSameBillingShipping").is(':checked')) {
                $("#txtAddressLine1").val($("#shippingAddress1").html());
                $("#txtAddressLine2").val($("#shippingAddress2").html());
                $("#txtShipingCity").val($("#shippingCity").html());
                $("#shippingState").val($("#shippingStateProvinceRegion").html());
                $("#txtShippingZip").val($("#shippingZipPostalCode").html());

                $("#txtBillingAddress1").val($("#shippingAddress1").html());
                $("#txtBillingAddress2").val($("#shippingAddress2").html());
                $("#txtBillingCity").val($("#shippingCity").html());
                $("#ddlBillingState").val($("#shippingStateProvinceRegion").html());
                $("#txtBillingShippingZipCode").val($("#shippingZipPostalCode").html());
            }
        }

        if ($("#changeAddress").val() == "1") {
            $("#txtAddressLine1").val($("#shippingAddress1").html());
            $("#txtAddressLine2").val($("#shippingAddress2").html());
            $("#txtShipingCity").val($("#shippingCity").html());
            $("#shippingState").val($("#shippingStateProvinceRegion").html());
            $("#txtShippingZip").val($("#shippingZipPostalCode").html());

            $("#txtBillingAddress1").val($("#shippingAddress1").html());
            $("#txtBillingAddress2").val($("#shippingAddress2").html());
            $("#txtBillingCity").val($("#shippingCity").html());
            $("#ddlBillingState").val($("#shippingStateProvinceRegion").html());
            $("#txtBillingShippingZipCode").val($("#shippingZipPostalCode").html());

        }
        $(".spin-data").hide();
        $('#modelChangeAddress').modal('hide');
        $('#error').show();
        initCustomForms();
        return false;
    },
    LoadConsultantInfo: function (consultantId) {


        var langCode = $("#hydDocumentCulture").val();
        var customConsultant = consultantId;
        var consultantId = $("#hydConsultantId").val();
        $.ajax({
            url: '/GData.asmx/ConsultantInfo',
            contentType: "application/json; charset=utf-8",
            error: function () {

            },
            data: "{'langCode':'" + langCode + "','customConsultant':'" + customConsultant + "','consultantId':'" + consultantId + "'}",
            dataType: 'json',
            success: function (data) {
                var obj = $.parseJSON(data.d);
                $("#ltrConsultant").text(obj.Details);
                $("#mobileConsultant").text(obj.Details);
                $("#loding").hide();
                if (obj.Error == "Error") {
                    $("#consultantErrorMessage").html(obj.ErrorMessage);
                    $("#mobileConsultantErrorMessage").html(obj.ErrorMessage);
                    $(".spin-data").hide();

                }
                if (obj.Error == "Success") {
                    $(".chagneBeautyConsultant").hide();
                    $('#hideBeautyConsultant').hide();
                    $("#consultantErrorMessage").text("");
                    $("#mobileConsultantErrorMessage").html("");
                    $(".spin-data").hide();
                    $("#hydConsultantId").val(obj.ConsultantId);
                    if (customConsultant.length == 0) {
                        jafraGlobal.LoadConsultantInfoCheckout($("#hydConsultantId").val());
                    }
                    else {

                        jafraGlobal.LoadConsultantInfoCheckout(customConsultant);
                    }

                }

            },
            complete: function (xhr, status) {
                $("#loding").hide();
            },
            type: 'POST'
        });
    },
    LoadConsultantInfoCheckout: function (consultantId) {
        $.ajax({
            url: '/GData.asmx/ConsultantName',
            contentType: "application/json; charset=utf-8",
            error: function () {

            },
            data: "{'consultantId':'" + consultantId + "'}",
            dataType: 'json',
            success: function (data) {
                var obj = $.parseJSON(data.d);
                var value = obj.FirstName + " " + obj.LastName;
                $("body").find("#ltrConsultantCheckout").text(value);
                $("body").find("#ltrConsLang").text(obj.Language);


            },
            complete: function (xhr, status) {

            },
            type: 'POST'
        });
    },

    ChangeConsultant: function () {
        $("#loding").show();
        jafraGlobal.LoadConsultantInfo($("#txtConsultantId").val());
        $(".close-btn").click();
        return false;
    },

    ChangeMobileConsultant: function () {
        jafraGlobal.LoadConsultantInfo($("#txtMobileConsultantId").val());
        return false;
    },
    BuildMegaMenu: function () {
        jafraGlobal.LoadMegaMenu($("#megemenu5094"));
        jafraGlobal.LoadMegaMenu($("#megemenu5291"));
        jafraGlobal.LoadMegaMenu($("#megemenu4864"));
        jafraGlobal.LoadMegaMenu($("#megemenu5186"));
        jafraGlobal.LoadMobileMenu();

    },
    LoadMegaMenu: function (obj) {
        var path = $(obj).attr("data-path");
        var documentCulture = $("#hydMegaMenuLang").val();
        var nodeId = $(obj).attr("data-nodeid");;
        if (nodeId = "") {
            nodeId = 0;
        }

        $.ajax({
            url: '/GData.asmx/MegaMenu',
            contentType: "application/json; charset=utf-8",
            error: function () {

            },
            data: "{'path':'" + path + "','documentCulture':'" + documentCulture + "','nodeId':" + $(obj).attr("data-nodeid") + "}",
            dataType: 'json',
            success: function (data) {
                $(obj).empty();
                $(obj).html(data.d);
            },
            complete: function (xhr, status) {

            },
            type: 'POST'
        });


    },
    LoadMobileMenu: function () {
        $.ajax({
            url: '/GData.asmx/MobileMenu',
            contentType: "application/json; charset=utf-8",
            error: function () {

            },
            data: "{'documentCulture':'es-mx'}",
            dataType: 'json',
            success: function (data) {

                $("#mobileMenu").append(data.d);
                $("#mobile-menu").mobileMenu({
                    MenuWidth: 250,
                    SlideSpeed: 300,
                    WindowsMaxWidth: 767,
                    PagePush: true,
                    FromLeft: true,
                    Overlay: false,
                    CollapseMenu: true,
                    ClassName: "mobile-menu"
                });
                $("#mobile-menu").show();
            },
            complete: function (xhr, status) {

            },
            type: 'POST'
        });


    },
    LoadTax: function (zipCode) {
        $.ajax({
            url: '/GData.asmx/GetTax',
            contentType: "application/json; charset=utf-8",
            error: function () {

            },
            data: "{'zipCode':'" + zipCode + "'}",
            dataType: 'json',
            success: function (data) {
                var obj = $.parseJSON(data.d);
                $("#miniOrderTotal").text(obj.Total);
                $("#miniShipping").text(obj.SH);
                $("#miniTax").text(obj.TaxAmount);

            },
            complete: function (xhr, status) {

            },
            type: 'POST'
        });


    },
    VerifyClient: function () {

        $("#continue").show();
        $("#error").hide();
        if (!$('body').hasClass('called')) {
            $('body').addClass('called');
            var email = $("#txtEmailAddress").val();


            $.ajax({
                url: '/RProcess.asmx/VerifyEmail',
                contentType: "application/json; charset=utf-8",
                error: function () {

                },
                data: "{'email':'" + email + "'}",
                dataType: 'json',
                success: function (data) {
                    var obj = $.parseJSON(data.d);
                    if (obj.Progress == 'Success') {
                        $.ajax({
                            url: '/GData.asmx/GetClientDetails',
                            contentType: "application/json; charset=utf-8",
                            error: function () {

                            },
                            data: "{'email':'" + email + "'}",
                            dataType: 'json',
                            success: function (data) {
                                var obj = $.parseJSON(data.d);
                                if (obj.ClientId > 0 && obj.StatusCode == 0) {
                                    $("#error").show();
                                    $("#continue").hide();
                                    $("#errorEmail").show();
                                    $("#serrorEmail").hide();
                                }

                                else {
                                    $("#btnProcessRegistration").click();

                                }
                            },
                            complete: function (xhr, status) {
                                $("#continue").hide();
                                $('body').removeClass('called');
                            },
                            type: 'POST'

                        });
                    }

                    else {
                        $("#error").show();
                        $("#continue").hide();
                        $("#errorEmail").hide();
                        $("#serrorEmail").text(obj.Progress);
                        $("#serrorEmail").show();
                        return false;
                    }
                },
                complete: function (xhr, status) {
                    $("#continue").hide();
                    $('body').removeClass('called');
                },
                type: 'POST'

            });

        }
        return false;
    },
    LoadingIcon: function () {
        $(".spin-data").show();
    },
    HideSideMenu: function () {
        $('#438').hide();
        $('#439').hide();
        $('#440').hide();

    },

}

$.fn.regexMask = function (mask) {
    $(this).keypress(function (event) {
        if (!event.charCode) return true;
        var part1 = this.value.substring(0, this.selectionStart);
        var part2 = this.value.substring(this.selectionEnd, this.value.length);
        if (!mask.test(part1 + String.fromCharCode(event.charCode) + part2))
            return false;
    });
};