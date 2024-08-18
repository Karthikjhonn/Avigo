import { View, Text, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
export default function SelectDate() {
  const [date, setDate] = useState(dayjs());
  const [modalVisible, setModalVisible] = useState(false);
  const today = new Date(date);
  const day = today.toLocaleDateString("en-US", { weekday: "short" });
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const todayDate = String(today.getDate()).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${day},${todayDate}/${month}/${year}`;
  const handleModel = () => {
    setModalVisible(!modalVisible);
  };
  console.log(date);

  return (
    <>
      <Pressable onPress={handleModel}>
        <View className="border border-gray-300 rounded-3xl min-h-[150px] p-4 basis-[48%] justify-between">
          <View className="flex justify-between flex-row items-center">
            <Text className="text-base font-normal text-gray-400">Date</Text>
            <Ionicons
              name="calendar-number-outline"
              size={24}
              color="#c2c2c2"
            />
          </View>
          <Text className="text-base font-normal" numberOfLines={1}>
            {formattedDate}
          </Text>
        </View>
      </Pressable>
      {/* date picker model  */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModel}
      >
        <Pressable
          className="bg-black/50 flex-1 justify-end"
          onPress={handleModel}
        >
          <Pressable
            onPress={() => {}}
            className="bg-white rounded-t-3xl p-6 py-10 max-h-[70%] justify-between"
          >
            <DateTimePicker
              mode="single"
              locale={"en"}
              date={date}
              onChange={(params) => setDate(params.date)}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
