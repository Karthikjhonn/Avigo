import {
  View,
  Text,
  Button,
  ActivityIndicator,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { userAuth } from "../../context/AuthContext";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { SolidButton } from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import { useFormik } from "formik";
import { loginValidation, signValidation } from "../../validation";
import FormError from "../../components/formError/FormError";

export default function Register() {
  const { setUser, user } = userAuth();
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const handleLogin = async (userDetails) => {
    setUser(true);
    try {
      console.log(JSON.stringify(userDetails));
      
      await AsyncStorage.setItem("user", JSON.stringify(true));
      await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
      router.replace("/home");
    } catch (error) {
      console.error("Failed to save user data:", error);
    }
  };
  const formik = useFormik({
    initialValues: { Name: "", email: "", password: "" },
    validationSchema: signValidation,
    onSubmit: (values) => {
      setLoader(true);
      setTimeout(() => {
        const details = {
          Name: values.Name,
          email: values.email,
          password: values.password,
        };
        handleLogin(details);
        setLoader(false);
      }, 2000);
    },
  });
  return (
    <SafeAreaView
      className={"bg-white flex-1 justify-between py-16 px-4 relative overflow-hidden"}
    >
      <View className={"bg-white relative"}>
        <View className={"flex flex-row gap-2 items-center mb-8"}>
          <Text className={"text-4xl font-allura text-cocoa-500"}>Avigo</Text>
          <Image
            source={require("../../assets/icons/Airplane.png")}
            className={"object-contain w-8 h-8 block"}
          />
        </View>
        <View className="singleField mb-1">
          <TextInput
            className={
              "px-3 py-2.5 border border-gray-300 min-h-[40px] rounded-xl"
            }
            placeholder="Enter Name"
            onChangeText={formik.handleChange("Name")}
            onBlur={formik.handleBlur("Name")}
            value={formik.values.Name}
          />
          <View className={"mb-1.5"}>
            <FormError error={formik.errors.Name} />
          </View>
        </View>
        <View className="singleField mb-1">
          <TextInput
            className={
              "px-3 py-2.5 border border-gray-300 min-h-[40px] rounded-xl"
            }
            placeholder="Enter email"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
          />
          <View className={"mb-1.5"}>
            <FormError error={formik.errors.email} />
          </View>
        </View>
        <View className="singleField mb-1">
          <TextInput
            className={
              "px-3 py-2.5 border border-gray-300 min-h-[40px] rounded-xl"
            }
            placeholder="Enter password"
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />
          <View className={"mb-1.5"}>
            <FormError error={formik.errors.password} />
          </View>
        </View>
        <Image
          source={require("../../assets/avigoimage/route.png")}
          className={"object-contain  block absolute top-full left-0 -z-10 "}
        />
      </View>

      <View>
        <SolidButton
          title={loader ? <Loader color="white" /> : "On Board"}
          onPress={formik.handleSubmit}
        />
        <Text className={"text-center mt-3 text-sm"}>
          Already have an account?{" "}
          <Link href={"login"} className={"text-cocoa-500 font-extrabold"}>
            Login
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}
