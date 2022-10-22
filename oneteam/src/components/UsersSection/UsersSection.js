import React from "react";

import UserCard from "../UserCard/UserCard";

const UsersSection = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-800">
                <UserCard />
                <UserCard />
                <UserCard />
                </div>
            </div>
        </section>
    )
};

export default UsersSection;