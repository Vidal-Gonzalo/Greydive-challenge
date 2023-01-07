import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function useFetch(id) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "surveyResults", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLoading(false);
          setSuccess(true);
          setData(docSnap.data());
        } else {
          setLoading(false);
          setError("No existen documentos asociados a ese ID");
        }
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    };
    fetchData();
  }, [id]);

  return { loading, error, success, data };
}
