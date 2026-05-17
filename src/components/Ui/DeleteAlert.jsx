"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Bounce, toast } from "react-toastify";

export function DeleteAlert({ destination }) {
  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );
    const data = await res.json();

    console.log("res.ok:", res.ok, "status:", res.status);

    if (res.ok) {
      toast.success("Destination Package Cancelled successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      redirect("/destinations");
    } else {
      toast.error("Failed to Cancelled Destination Package.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }

    console.log(data);
  };

  return (
    <AlertDialog>
      <Button
        className="border border-red-400 text-red-400 hover:bg-red-50 rounded-md"
        variant="outline"
      >
        {" "}
        <RiDeleteBin6Line size={25} /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="flex flex-row items-center mb-5">
              <AlertDialog.Icon status="danger" />
              <span className="font-extrabold text-xl">
                {" "}
                Delete Travel Package
              </span>
            </AlertDialog.Header>
            <AlertDialog.Body className="mb-5">
              <p>
                Are you sure you want to delete
                <strong>
                  {" '"}
                  {destinationName}
                  {"'"}
                </strong>{" "}
                ? This action cannot be undone and will permanently remove this
                travel package from the system.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                slot="close"
                className="rounded-md text-base text-gray-500"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className="rounded-md"
                variant="danger"
              >
                {" "}
                <RiDeleteBin6Line size={25} /> Delete Package
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
