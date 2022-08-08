<?php
    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $phone = $_POST['phone'];
    // $text = $_POST['text'];

    // $text = wordwrap($text, 70, "\r\n");

    // send email
    if (    imap_mail("aidarbek.ansar@mail.ru","sauryq success", "nice"))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
?>