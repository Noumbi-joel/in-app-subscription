import { Text, View, Modal, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

// icons
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  visible: boolean;
  setVisible: any;
};

const Paywall = ({ visible, setVisible }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={setVisible}
    >
      <ScrollView className="flex-1 mt-3 bg-[#1A2F44]">
        <View className="m-10 space-y-2">
          <Text className="text-2xl text-center uppercase text-white font-bold">
            Upgrade
          </Text>
          <Text className="text-center text-white">
            Upgrade Pro to Access all the features
          </Text>
        </View>

        <TouchableOpacity
          onPress={setVisible}
          className="absolute top-0 right-0 p-3"
        >
          <Ionicons name="md-close-circle-sharp" size={32} color="#E5962D" />
        </TouchableOpacity>

        {/* Logo */}
        <View className="items-center">
          <MaterialCommunityIcons
            name="trophy-outline"
            size={150}
            color="#E5962D"
          />
        </View>

        {/* Content */}
        <View className="space-y-5 px-5 py-5">
          <View className="flex-row space-x-10 items-center">
            <Ionicons name="md-key" size={32} color="#E5962D" />
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">
                Access to all Pro Features
              </Text>
              <Text className="text-white text-sm font-extralight">
                Upgrade to the premium version of the app and enjoy all the
                exclusive features available only to pro users.
              </Text>
            </View>
          </View>

          <View className="flex-row space-x-10 items-center">
            <Ionicons name="md-person-add-outline" size={32} color="#E5962D" />
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">
                Helpline 24/7 to Personal Trainers
              </Text>
              <Text className="text-white text-sm font-extralight">
                Get unlimited acess to our fitness support team and get help
                anytime you nedd it - day or night.
              </Text>
            </View>
          </View>

          <View className="flex-row space-x-10 items-center">
            <Ionicons name="md-star" size={32} color="#E5962D" />
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">
                Unlock limited Edition Content
              </Text>
              <Text className="text-white text-sm font-extralight">
                Unlock exclusive content that you can't get anywhere else, like
                special exclusive workouts and routines
              </Text>
            </View>
          </View>
        </View>

        {/* Monthly Subscribe */}

        {/* Annual Subscribe */}

        {/* Restore Purchases */}
      </ScrollView>
    </Modal>
  );
};

export default Paywall;
