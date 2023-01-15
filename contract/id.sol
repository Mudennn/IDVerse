// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/** @title A Digital Identity smart contract
 * @author Ahmad Aizuddin
 * @notice This contract is used to store and retrieve the basic information
 */
contract DigitalIdentity {
    address owner;
    mapping(string => identity) identity_id;
    mapping(string => bool) public emailId;
    mapping(uint256 => bool) public contactNum;

    struct identity {
        string ssn_id; //SSN Id (Unique Id)
        string first_name; // Name of the person
        string last_name;
        string location;
        string city;
        string state;
        uint256 zip_code;
        string dob; // Date of birth
        string gender; // Gender
        uint256 contact_no; // Contact No
        uint256 registration_no;
        string email; // Email
    }

    identity id;

    modifier isOwner() {
        require(msg.sender == owner, "Access is not allowed");

        _;
    }

    function setDetails(
        string memory _ssn_id,
        string memory _first_name,
        string memory _last_name,
        string memory _location,
        string memory _city,
        string memory _state,
        uint256 _zip_code,
        string memory _dob,
        string memory _gender,
        uint256 _contact_no,
        uint256 _registration_no,
        string memory _email
    ) public isOwner {
        // Function for inputtng the information from the UI
        // _mint(msg.sender,;
        require(!emailId[_email], "Email Exists"); // Checks for email duplication
        require(!contactNum[_contact_no], "Contact Number Exists"); // Checks for contact number duplication

        id.first_name = _first_name; // assigning the first name parameter
        id.last_name = _last_name; // assigning the last name parameter
        id.location = _location; // assigning the location parameter
        id.city = _city;
        id.state = _state;
        id.zip_code = _zip_code; // assigning the zip code parameter
        id.dob = _dob; // assigns the date of birth paratmer obtained from UI
        id.gender = _gender; // assigns the gender parameter obtained from UI
        id.contact_no = _contact_no; //assigns the contact number obtained from UI
        id.registration_no = _registration_no; //assigns the contact number obtained from UI
        id.email = _email; //assigns email parameter obtained from UI

        identity_id[_ssn_id] = id;

        contactNum[_contact_no] = true;
        emailId[_email] = true;
    }

    function getuserDetails(
        string memory _ssn_id
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            uint256,
            string memory,
            string memory,
            uint256,
            uint256,
            string memory
        )
    {
        // Function for retrieving user information entered in the UI

        identity memory _id = identity_id[_ssn_id];
        return (
            _id.first_name,
            _id.last_name,
            _id.location,
            _id.city,
            _id.state,
            _id.zip_code,
            _id.dob,
            _id.gender,
            _id.contact_no,
            _id.registration_no,
            _id.email
  );
}
}
