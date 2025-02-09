import {useMutation} from "@tanstack/react-query";
import {signup as signUpApi} from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useSignup() {
	const {mutate: signup, isLoading} = useMutation({
		mutationFn: signUpApi,
		onSuccess: () => {
			toast.success("User created successfully. Please verify your email address.");
		},
	});
	return {signup, isLoading};
}
