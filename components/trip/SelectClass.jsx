import { View, Text, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Checkbox } from "react-native-paper";
export default function SelectClass() {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState({
    fc: false,
    bc: false,
    pc: true,
    ec: false,
  });
  const handleModel = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Pressable
        // android_ripple={{ color: "#fffcdcd80" }}
        onPress={handleModel}
        className="border border-gray-300 rounded-3xl min-h-[150px] p-4 basis-[48%] justify-between"
      >
        <View className="flex justify-between flex-row items-center">
          <Text className="text-base font-normal text-gray-400">Class</Text>
          <MaterialCommunityIcons
            name="book-arrow-right-outline"
            size={24}
            color="#c2c2c2"
          />
        </View>
        <View className="flex flex-row flex-wrap gap-1">
          {checked.fc ? (
            <Text className="capitalize text-sm font-normal bg-sand-100 px-1.5 py-px rounded-lg">
              first
            </Text>
          ) : null}
          {checked.bc ? (
            <Text className="capitalize text-sm font-normal bg-sand-100 px-1.5 py-px rounded-lg">
              Business
            </Text>
          ) : null}
          {checked.pc ? (
            <Text className="capitalize text-sm font-normal bg-sand-100 px-1.5 py-px rounded-lg">
              premium
            </Text>
          ) : null}
          {checked.ec ? (
            <Text className="capitalize text-sm font-normal bg-sand-100 px-1.5 py-px rounded-lg">
              Economy
            </Text>
          ) : null}
        </View>
      </Pressable>
      {/* modal start  */}
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
            <Text className="text-xl font-medium mb-4 "> Select Class</Text>
            <View className="space-y-1">
              <View className="flex-row items-center">
                <Checkbox
                  status={checked.fc ? "checked" : "unchecked"}
                  onPress={() => setChecked({ ...checked, fc: !checked.fc })}
                  color="#AE2012"
                />
                <Pressable
                  className="text-base"
                  onPress={() => setChecked({ ...checked, fc: !checked.fc })}
                >
                  <Text className="text-base font-normal">First Class</Text>
                </Pressable>
              </View>
              <View className="flex-row items-center">
                <Checkbox
                  status={checked.bc ? "checked" : "unchecked"}
                  onPress={() => setChecked({ ...checked, bc: !checked.bc })}
                  color="#AE2012"
                />
                <Pressable
                  className="text-base"
                  onPress={() => setChecked({ ...checked, bc: !checked.bc })}
                >
                  <Text className="text-base font-normal">Business Class</Text>
                </Pressable>
              </View>
              <View className="flex-row items-center">
                <Checkbox
                  status={checked.pc ? "checked" : "unchecked"}
                  onPress={() => setChecked({ ...checked, pc: !checked.pc })}
                  color="#AE2012"
                />
                <Pressable
                  className="text-base"
                  onPress={() => setChecked({ ...checked, pc: !checked.pc })}
                >
                  <Text className="text-base font-normal">Premium Class</Text>
                </Pressable>
              </View>
              <View className="flex-row items-center">
                <Checkbox
                  status={checked.ec ? "checked" : "unchecked"}
                  onPress={() => setChecked({ ...checked, ec: !checked.ec })}
                  color="#AE2012"
                />
                <Pressable
                  className="text-base"
                  onPress={() => setChecked({ ...checked, ec: !checked.ec })}
                >
                  <Text className="text-base font-normal">Economy Class</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
