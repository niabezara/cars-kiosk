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
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Details</Text>

        {/* Name */}
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <View>
              <TextInput
                style={[styles.input, errors.name && styles.inputError]}
                placeholder="Full Name *"
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
                placeholder="Phone Number *"
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
                placeholder="Email Address *"
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

        {/* Message */}
        <Controller
          control={control}
          name="message"
          render={({ field: { onChange, value } }) => (
            <View>
              <TextInput
                style={[styles.input, styles.textarea]}
                placeholder="Message (optional)"
                value={value}
                onChangeText={onChange}
                multiline
                numberOfLines={4}
              />
            </View>
          )}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={onSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Send</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 24 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#888",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
    backgroundColor: "#fafafa",
  },
  inputError: { borderColor: "red" },
  textarea: { height: 100, textAlignVertical: "top" },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
    marginBottom: 40,
  },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
