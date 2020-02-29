function doPost(e) {
    var name = e.parameter.name;
    var mail = e.parameter.mail;
    var answer = e.parameter.answer;

    var address = mail;
    var subject = "お仕事の相談・依頼について";
    var content = name + "さま\n\n";
    content += "大変お世話になっております。\n";
    content += "suon_trungです。\n\n";
    content += "この度はお仕事の依頼をして頂き、誠にありがとうございます。\n";
    content += "このメールは自動で送信されています。\n\n";
    content += "相談・依頼内容を確認した後、ご連絡申し上げます。\n";
    content += "どうぞよろしくお願いいたします。\n";
    MailApp.sendEmail(address, subject, content);

    address = "atsushi.u.denki@gmail.com";
    subject = "お仕事の相談・依頼について";
    content = name + "さまからお仕事の依頼がきました。\n\n";
    content += "内容は以下の通りです。\n";
    content += answer + "\n";
    content += mail + "\nまで返信をお願いします。\n";
    MailApp.sendEmail(address, subject, content);

    var htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
    htmlOutput.setTitle('Portfolio お問い合わせ完了');
    var url = url_return(htmlOutput);
    return url;

}