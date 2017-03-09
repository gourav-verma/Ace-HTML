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
            jcskey: [
  "-----BEGIN PGP PUBLIC KEY BLOCK-----",
  "Version: GnuPG v1",
  "",
  "mQENBFRawrUBCADaChkQpCW711i1Csu9iqEU95gp+Cw8WUJ2V5yT+lnh1l56MeMc",
  "2fs98w8HegDbcWriW/JFE5Mw/iZR2PqDvw3U3zxi0LmD7hfIILL7vE/lWdnAmm1g",
  "5AHCdWoOFzX+FmK1JgA4xJkXAbihxzGEORdYTa9b48gF5PWzPB9gZ1Ahq3OuLLaf",
  "xFzfgPa9oPnWjhuuFicpIFu2IXxv/g8GgfWck1WeBrrvtFfoAoHzWf9OgV1MVPkV",
  "Wo9ERbIH4Xsm1SuDtzHazun4qsW63mpxY+pWxiuxHsQVGVXyML3ETsbwy/Tumn7M",
  "Pd1kpMZvTsyR5CdDMLYEULm4l1l5V1e5C6knABEBAAG0JEphZnJhIFByb2R1Y3Rp",
  "b24gS2V5IDxkZXZAamFmcmEuY29tPokBOAQTAQIAIgUCVFrCtQIbAwYLCQgHAwIG",
  "FQgCCQoLBBYCAwECHgECF4AACgkQmW8s+7cnsCZ1UggA0NGtwJ2YR4BFUutYT9my",
  "XVYWk7AMaLzuFIvHDCbsBl41h6O/uBMojplONhOXf83i2TM0dBphoPs9k5sgBYIZ",
  "JeVhPaK4sDCB7+70uIPrN3cL9O+yb5aPAQUtPbEyBs/Zug+euiXN15CHlZLOtDnE",
  "ZIItsy24yEihB0K6ztzUK4qZH1Ypd6yH3ws968vez6fsk/zM3erxhggxC32luNKZ",
  "/DcGRfNxX86clkl6W9g4qAsP2eN/+K+xYuIPN7ExxPKIePJOF+SLMl5FbEBHt0Yw",
  "zYhXhDO0Pv9wrJbsc30FuA3GmayghzwMaenuqxbSD/FAsRK/Fkhs3z3c+nNAyiW0",
  "L7kBDQRUWsK1AQgAuUeYv9nCep8TyY6WDfO7x3qkUjn8Q1N2vh/ZSrPCMd9Zx5qK",
  "syDriyZrE91/Qbr7O6ywD4n27aNSJ9objIaO1r88f2pu+CARlc3u1ni7thNsrkWo",
  "vDb1h8iRjdH5iy8bsSA1XlQ9EQLe8Y0p1wzyQbDZYW/qKc4N3Y3/gbk3s1dQgGR3",
  "SuFRwbBwfNWeq0xAe/NN2qSW68kxEg/AauOVEBwLVtwNojRqmzyu92KRuuAXEtvq",
  "FG2+u6ec993Sg6rJ3tgr/1ghzsIgdu9/SvH7XW3h8UHoXDuaqdpiGuYeUJgfUahK",
  "1viVk95TJQxUxDybVPCX3FuP9lIoCML7Sy6hIQARAQABiQEfBBgBAgAJBQJUWsK1",
  "AhsMAAoJEJlvLPu3J7AmAd4H/j9M212jUIlnHoquKKt2mV+Ne9nel8seb9TAsVPG",
  "3LtIqkodYFhbEsZHJR0gKznt1BMt9+sg3u4JIe+OtxUoyTONXjk39zvk4A+DO9dQ",
  "SE7H0VS/1qm9rvUcUOH6bJHWGRfLJZa7LuOwaAAH2NKrlaL6JCRmkHBKzVrz+BpN",
  "5y5QhgSWWBsCkx8S6IawtAP1yEWhiITdCQDUlOyXRp1OHVP+ukXMumtETcQpmmCU",
  "6VhzruEaEpAS/L4BKulyblgActhzRizoKjtOHVKNJpWgUjrTC7i7JuQAVzFGSUjd",
  "D9OP+o1MRijFAfdFJSXPwBimI8Ke1kd4f30IUjnGwG2D4gk=",
  "=vP2p",
  "-----END PGP PUBLIC KEY BLOCK-----",
            ]
        };
        // Allow overriding the default config
        $.extend(jafraGlobal.config, settings);
        jafraGlobal.Setup();
    },
    Setup: function () {
        $.ajaxSetup({ cache: false });
        $("#PlaceOrder").on("click", jafraGlobal.EncryptCreditCard);
        $("#btnRegister").on("click", jafraGlobal.VerifyEmail);
        $("#resetPassword").on("click", jafraGlobal.VerifyForgotPasswordEmail);
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
        $("#btnAddCreditCard").on("click", jafraGlobal.NewCreditCard);

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

    NewCreditCard: function () {


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
            $("#processCard").click();
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

    VerifyForgotPasswordEmail: function () {

        $("#continue").show();
        $("#error").hide();
        if (!$('body').hasClass('called')) {
            $('body').addClass('called');
            var email = $("#txtPasswordRetrieval").val();
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
                        $("#hydPasswordButton").click();
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
            url: '/JG001WP008.asmx/ConsultantInfo',
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
            url: '/JG001WP008.asmx/ConsultantName',
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
        jafraGlobal.LoadCatalogMenu($("#megemenu424"));
        jafraGlobal.LoadMobileMenu();

    },

    LoadCatalogMenu: function (obj) {
        var path = $(obj).attr("data-path");
        var documentCulture = $("#hydMegaMenuLang").val();
        var nodeId = $(obj).attr("data-nodeid");;
        if (nodeId = "") {
            nodeId = 0;
        }

        $.ajax({
            url: '/GData.asmx/CatalogMenu',
            contentType: "application/json; charset=utf-8",
            error: function () {

            },
            data: "{'documentCulture':'" + documentCulture + "','nodeId':'" + $(obj).attr("data-nodeid") + "','pws':'" + $("#hydPWS").val() + "'}",
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
            data: "{'documentCulture':'" + $("#hydDocumentCulture").val() + "','pws':'" + $("#hydPWS").val() + "'}",
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
            url: '/JG001WP008.asmx/GetTax',
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
                            url: '/JG001WP008.asmx/GetClientDetails',
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