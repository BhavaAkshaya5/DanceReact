import React, { useState } from "react";
import "./AdmissionForm.css";

function AdmissionForm() {

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    dob: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    danceStyle: "",
    batch: "",
    experience: "",
    address: "",
    medical: "",
  });

  const [errors, setErrors] = useState({});

  // Update input values
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validation Function
  const validate = () => {

    let newErrors = {};

    // Student Name
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required.";
    } else if (!/^[A-Za-z ]+$/.test(formData.studentName)) {
      newErrors.studentName = "Only alphabets are allowed.";
    }

    // Parent Name
    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent name is required.";
    } else if (!/^[A-Za-z ]+$/.test(formData.parentName)) {
      newErrors.parentName = "Only alphabets are allowed.";
    }

    // Date of Birth
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required.";
    } else {
      const today = new Date();
      const dob = new Date(formData.dob);

      if (dob > today) {
        newErrors.dob = "Future date is not allowed.";
      }
    }

    // Age
    if (!formData.age) {
      newErrors.age = "Age is required.";
    } else if (formData.age < 3 || formData.age > 60) {
      newErrors.age = "Age must be between 3 and 60.";
    }

    // Gender
    if (!formData.gender) {
      newErrors.gender = "Please select gender.";
    }

    // Mobile Number
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    // Email
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }

    // Dance Style
    if (!formData.danceStyle) {
      newErrors.danceStyle = "Select a dance style.";
    }

    // Batch
    if (!formData.batch) {
      newErrors.batch = "Select preferred batch.";
    }

    // Address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    } else if (formData.address.length < 10) {
      newErrors.address = "Address should contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      console.log(formData);

      // MongoDB API call will be added later

      alert("Form is Valid!");

      setFormData({
        studentName: "",
        parentName: "",
        dob: "",
        age: "",
        gender: "",
        mobile: "",
        email: "",
        danceStyle: "",
        batch: "",
        experience: "",
        address: "",
        medical: "",
      });

      setErrors({});
    }

  };

  <form onSubmit={handleSubmit}>

  {/* Student Name & Parent Name */}

  <div className="row">

    <div className="input-box">
      <label>Student Name</label>
      <input
        type="text"
        name="studentName"
        value={formData.studentName}
        onChange={handleChange}
        placeholder="Enter Full Name"
      />
      {errors.studentName && (
        <span className="error">{errors.studentName}</span>
      )}
    </div>

    <div className="input-box">
      <label>Parent Name</label>
      <input
        type="text"
        name="parentName"
        value={formData.parentName}
        onChange={handleChange}
        placeholder="Parent / Guardian Name"
      />
      {errors.parentName && (
        <span className="error">{errors.parentName}</span>
      )}
    </div>

  </div>

  {/* DOB & Age */}

  <div className="row">

    <div className="input-box">
      <label>Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      {errors.dob && (
        <span className="error">{errors.dob}</span>
      )}
    </div>

    <div className="input-box">
      <label>Age</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      {errors.age && (
        <span className="error">{errors.age}</span>
      )}
    </div>

  </div>

  {/* Gender & Mobile */}

  <div className="row">

    <div className="input-box">
      <label>Gender</label>

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      {errors.gender && (
        <span className="error">{errors.gender}</span>
      )}

    </div>

    <div className="input-box">
      <label>Mobile Number</label>

      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="9876543210"
      />

      {errors.mobile && (
        <span className="error">{errors.mobile}</span>
      )}

    </div>

  </div>

  {/* Email & Dance Style */}

  <div className="row">

    <div className="input-box">

      <label>Email Address</label>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@gmail.com"
      />

      {errors.email && (
        <span className="error">{errors.email}</span>
      )}

    </div>

    <div className="input-box">

      <label>Dance Style</label>

      <select
        name="danceStyle"
        value={formData.danceStyle}
        onChange={handleChange}
      >

        <option value="">Select Style</option>
        <option>Bharatanatyam</option>
        <option>Hip Hop</option>
        <option>Western</option>
        <option>Contemporary</option>
        <option>Classical</option>
        <option>Folk Dance</option>

      </select>

      {errors.danceStyle && (
        <span className="error">{errors.danceStyle}</span>
      )}

    </div>

  </div>

  {/* Batch & Experience */}

  <div className="row">

    <div className="input-box">

      <label>Preferred Batch</label>

      <select
        name="batch"
        value={formData.batch}
        onChange={handleChange}
      >

        <option value="">Select Batch</option>
        <option>Morning</option>
        <option>Evening</option>
        <option>Weekend</option>

      </select>

      {errors.batch && (
        <span className="error">{errors.batch}</span>
      )}

    </div>

    <div className="input-box">

      <label>Previous Experience</label>

      <input
        type="text"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="If any"
      />

    </div>

  </div>

  {/* Address */}

  <div className="input-box">

    <label>Address</label>

    <textarea
      rows="4"
      name="address"
      value={formData.address}
      onChange={handleChange}
      placeholder="Enter Full Address"
    ></textarea>

    {errors.address && (
      <span className="error">{errors.address}</span>
    )}

  </div>

  {/* Medical */}

  <div className="input-box">

    <label>Medical Information (Optional)</label>

    <textarea
      rows="3"
      name="medical"
      value={formData.medical}
      onChange={handleChange}
      placeholder="Any allergies or medical conditions"
    ></textarea>

  </div>

  {/* Buttons */}

  <div className="button-group">

    <button
      type="submit"
      className="submit-btn"
    >
      Submit Application
    </button>

    <button
      type="reset"
      className="reset-btn"
      onClick={() => {
        setFormData({
          studentName: "",
          parentName: "",
          dob: "",
          age: "",
          gender: "",
          mobile: "",
          email: "",
          danceStyle: "",
          batch: "",
          experience: "",
          address: "",
          medical: "",
        });

        setErrors({});
      }}
    >
      Reset
    </button>

  </div>

</form>
return (
  <div className="admission-page">

    <div className="form-container">

      <h1>Dance School Admission Form</h1>
      <p>Fill in your details to join our dance academy.</p>

      <form onSubmit={handleSubmit}>

        {/* Student Name & Parent Name */}

        <div className="row">

          <div className="input-box">
            <label>Student Name</label>

            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className={errors.studentName ? "input-error" : ""}
            />

            {errors.studentName &&
              <span className="error">{errors.studentName}</span>
            }

          </div>

          <div className="input-box">

            <label>Parent Name</label>

            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent / Guardian Name"
              className={errors.parentName ? "input-error" : ""}
            />

            {errors.parentName &&
              <span className="error">{errors.parentName}</span>
            }

          </div>

        </div>

        {/* DOB & Age */}

        <div className="row">

          <div className="input-box">

            <label>Date of Birth</label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={errors.dob ? "input-error" : ""}
            />

            {errors.dob &&
              <span className="error">{errors.dob}</span>
            }

          </div>

          <div className="input-box">

            <label>Age</label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className={errors.age ? "input-error" : ""}
            />

            {errors.age &&
              <span className="error">{errors.age}</span>
            }

          </div>

        </div>

        {/* Gender & Mobile */}

        <div className="row">

          <div className="input-box">

            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={errors.gender ? "input-error" : ""}
            >

              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>

            </select>

            {errors.gender &&
              <span className="error">{errors.gender}</span>
            }

          </div>

          <div className="input-box">

            <label>Mobile Number</label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="9876543210"
              className={errors.mobile ? "input-error" : ""}
            />

            {errors.mobile &&
              <span className="error">{errors.mobile}</span>
            }

          </div>

        </div>

        {/* Email & Dance Style */}

        <div className="row">

          <div className="input-box">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className={errors.email ? "input-error" : ""}
            />

            {errors.email &&
              <span className="error">{errors.email}</span>
            }

          </div>

          <div className="input-box">

            <label>Dance Style</label>

            <select
              name="danceStyle"
              value={formData.danceStyle}
              onChange={handleChange}
              className={errors.danceStyle ? "input-error" : ""}
            >

              <option value="">Select Style</option>
              <option>Bharatanatyam</option>
              <option>Hip Hop</option>
              <option>Western</option>
              <option>Contemporary</option>
              <option>Classical</option>
              <option>Folk Dance</option>

            </select>

            {errors.danceStyle &&
              <span className="error">{errors.danceStyle}</span>
            }

          </div>

        </div>

        {/* Batch & Experience */}

        <div className="row">

          <div className="input-box">

            <label>Preferred Batch</label>

            <select
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className={errors.batch ? "input-error" : ""}
            >

              <option value="">Select Batch</option>
              <option>Morning</option>
              <option>Evening</option>
              <option>Weekend</option>

            </select>

            {errors.batch &&
              <span className="error">{errors.batch}</span>
            }

          </div>

          <div className="input-box">

            <label>Previous Experience</label>

            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="If any"
            />

          </div>

        </div>

        {/* Address */}

        <div className="input-box">

          <label>Address</label>

          <textarea
            rows="4"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Full Address"
            className={errors.address ? "input-error" : ""}
          />

          {errors.address &&
            <span className="error">{errors.address}</span>
          }

        </div>

        {/* Medical */}

        <div className="input-box">

          <label>Medical Information (Optional)</label>

          <textarea
            rows="3"
            name="medical"
            value={formData.medical}
            onChange={handleChange}
            placeholder="Any allergies or medical conditions"
          />

        </div>

        {/* Buttons */}

        <div className="button-group">

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Application
          </button>

          <button
            type="reset"
            className="reset-btn"
            onClick={() => {

              setFormData({
                studentName: "",
                parentName: "",
                dob: "",
                age: "",
                gender: "",
                mobile: "",
                email: "",
                danceStyle: "",
                batch: "",
                experience: "",
                address: "",
                medical: "",
              });

              setErrors({});

            }}
          >
            Reset
          </button>

        </div>

      </form>

    </div>

  </div>
);
}

export default AdmissionForm;

