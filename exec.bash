#!/bin/bash

read -p "Pasta do projeto: " pasta
read -p "Versão do build: " versao
read -p "S.O? [android/ios]: " so

case $so in
    android/a/1/Android/ANDROID)
        echo "android"
        ;;
    ios/2/iOS/IOS)
        echo "ios"
        ;;
    *)
        echo "Sorry, invalid input"
        ;;
esac