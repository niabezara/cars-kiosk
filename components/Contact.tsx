import { InquiryFormData } from "@/schema/validation";
import { Control, Controller, FieldErrors } from "react-hook-form";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ContactProps = {
  control: Control<InquiryFormData>;
  errors: FieldErrors<InquiryFormData>;
  onSubmit: () => void;
  loading: boolean;
};

export default function Contact({
  control,
  errors,
  onSubmit,
  loading,
}: ContactProps) {
  return (
    <View>
      {/* Name */}
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <View>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="სახელი"
              placeholderTextColor="#aaa"
              value={value}
              onChangeText={onChange}
            />
            {errors.name && (
              <Text style={styles.error}>{errors.name.message}</Text>
            )}
          </View>
        )}
      />

      {/* Phone */}
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value } }) => (
          <View>
            <TextInput
              style={[styles.input, errors.phone && styles.inputError]}
              placeholder="ტელეფონის ნომერი"
              placeholderTextColor="#aaa"
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
            />
            {errors.phone && (
              <Text style={styles.error}>{errors.phone.message}</Text>
            )}
          </View>
        )}
      />

      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <View>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="ელ ფოსტის მისამართი"
              placeholderTextColor="#aaa"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}
          </View>
        )}
      />

      {/* Phone (secondary) */}
      <Controller
        control={control}
        name="message"
        render={({ field: { onChange, value } }) => (
          <View>
            <TextInput
              style={[styles.input]}
              placeholder="ტელეფონის ნომრი"
              placeholderTextColor="#aaa"
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
            />
          </View>
        )}
      />

      {/* Privacy */}
      <View style={styles.privacySection}>
        <Text style={styles.privacyTitle}>კონფიდენციალურობა</Text>
        <Text style={styles.privacyText}>
          Tegeta Cars შეინახავს და დაამუშავებს თქვენს პერსონალურ მონაცემებს
          საინფორმაციო შეტყობინების მიხედვით.
        </Text>
        <Text style={styles.privacyText}>
          Tegeta Cars ასევე გაუზიარებს თქვენს პერსონალურ მონაცემებს თქვენს
          მიერ არჩეულ საცალო გამყიდველს თქვენი მოთხოვნის დამუშავებისა და
          შემდგომი შესრულების მიზნით.
        </Text>
      </View>

      {/* Checkboxes row */}
      <View style={styles.checkboxRow}>
        <Text style={styles.checkboxLabel}>☐ ელ.ფოსტა</Text>
        <Text style={styles.checkboxLabel}>☐ ტელეფონი</Text>
        <Text style={styles.checkboxLabel}>☐ SMS შეტყობინება</Text>
      </View>

      {/* Submit */}
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={onSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>მოთხოვნის გაგზავნა</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
    backgroundColor: "#fafafa",
    color: "#333",
  },
  inputError: {
    borderColor: "#E53935",
  },
  error: {
    color: "#E53935",
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
    marginLeft: 4,
  },
  privacySection: {
    marginTop: 16,
    marginBottom: 12,
  },
  privacyTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  privacyText: {
    fontSize: 12,
    color: "#777",
    lineHeight: 18,
    marginBottom: 6,
  },
  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  checkboxLabel: {
    fontSize: 12,
    color: "#555",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
