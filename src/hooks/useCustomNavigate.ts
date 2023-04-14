import { useNavigate } from "react-router-dom";

export default function useCustomNavigate() {
  const navigate = useNavigate();

  const handleNavigate = ({ url }: { url: string }) => navigate(url);

  return { handleNavigate };
}
