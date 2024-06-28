import React from "react";
import AppDemo from "./AppDemo";

const BasicFeature = () => {
  return (
    <div className="my-24 justify-center">
      <div className="w-full mb-5 lg:flex gap-5">
        <div className="w-full mb-8 lg:mb-0">
          <AppDemo />
        </div>
        <div className="lg:w-2/3 lg:mb-0 mb-8 w-full rounded-3xl bg-blue-100">
          <h1 className="text-center text-2xl mt-20 mb-10 font-bold">
            AI ENC (Environmental Noise Cancellation)
          </h1>
          <ul className="px-10 list-disc mb-20">
            <li className="mb-3">
              Reduces background noise during calls using advanced AI
              algorithms.
            </li>
            <li className="mb-3">
              Ensures crystal-clear communication even in noisy environments.
            </li>
            <li className="mb-3">
              Superior performance compared to any TWS ENC for Indian noises.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:flex gap-5 mb-5">
        <div className="border lg:hidden mb-8 lg:mb-0 w-full rounded-3xl">
          <img
            src="https://lh3.googleusercontent.com/l7x6bIzuSylKcT4xNrr9iF6hh-LeFy8K_HeuSf2jM12CulYTRP9ifREKFAXGRLSf5UCEX4NJlxrE8sGnhpaCyl0faktXT9Hd2X4=rw-e365-w3000"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="border mb-8 lg:mb-0 lg:w-2/3 w-full bg-blue-100 rounded-3xl">
          <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
            Brand Wake Word for Hybrid Hands-free
          </h1>
          <ul className="px-10 list-disc mb-20">
            <li className="mb-3">
              Activate the voice assistant by saying a specific wake word.
            </li>
            <li className="mb-3">
              Seamless hands-free experience for controlling various functions
              through Google/Siri voice assistants (when online) or offline
              commands built into TWS like volume up, play next song,
              answer/reject calls, etc.
            </li>
          </ul>
        </div>
        <div className="border hidden lg:block mb-8 lg:mb-0 w-full rounded-3xl">
          <img
            src="https://lh3.googleusercontent.com/l7x6bIzuSylKcT4xNrr9iF6hh-LeFy8K_HeuSf2jM12CulYTRP9ifREKFAXGRLSf5UCEX4NJlxrE8sGnhpaCyl0faktXT9Hd2X4=rw-e365-w3000"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
      </div>
      <div className="w-full mb-5 lg:flex gap-5">
        <div className="border w-full rounded-3xl mb-8 lg:mb-0">
          <img
            src="https://lh3.googleusercontent.com/l7x6bIzuSylKcT4xNrr9iF6hh-LeFy8K_HeuSf2jM12CulYTRP9ifREKFAXGRLSf5UCEX4NJlxrE8sGnhpaCyl0faktXT9Hd2X4=rw-e365-w3000"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="border mb-8 lg:mb-0 lg:w-2/3 w-full bg-blue-100 rounded-3xl">
          <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
            Auto Volume (ANC Alternative) with Conversation Sensor
          </h1>
          <ul className="px-10 list-disc mb-20">
            <li className="mb-3">
              Automatically adjusts the volume based on background noise levels.
            </li>
            <li className="mb-3">
              Lowers the volume when a conversation is detected, ensuring a
              consistent listening experience.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:flex gap-5 mb-5">
        <div className="border lg:hidden mb-8 lg:mb-0 w-full rounded-3xl">
          <img
            src="https://lh3.googleusercontent.com/l7x6bIzuSylKcT4xNrr9iF6hh-LeFy8K_HeuSf2jM12CulYTRP9ifREKFAXGRLSf5UCEX4NJlxrE8sGnhpaCyl0faktXT9Hd2X4=rw-e365-w3000"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="border mb-8 lg:mb-0 lg:w-2/3 w-full bg-blue-100 rounded-3xl">
          <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
            Safety Feature (Transparency Mode Alternative)
          </h1>
          <ul className="px-10 list-disc mb-20">
            <li className="mb-3">
              Alerts users in emergency situations like loud horns, police
              sirens, ambulance sirens, and indoor fire alarms.
            </li>
            <li className="mb-3">
              Keeps users safe while listening to loud music.
            </li>
          </ul>
        </div>
        <div className="border hidden lg:block mb-8 lg:mb-0 w-full rounded-3xl">
          <img
            src="https://lh3.googleusercontent.com/l7x6bIzuSylKcT4xNrr9iF6hh-LeFy8K_HeuSf2jM12CulYTRP9ifREKFAXGRLSf5UCEX4NJlxrE8sGnhpaCyl0faktXT9Hd2X4=rw-e365-w3000"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicFeature;
