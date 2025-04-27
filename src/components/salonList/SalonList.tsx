import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SalonListCSS.css";
import { getSalons, getSalonImage } from "../../Services/salonService";
import { Salon } from "../../models/Salon";
import header from "../header/Header";

interface Salon {
  id: number;
  salonName: string;
  city: string;
  street: string;
  number: string;
  imageUrl: string | null;
}

const SalonList = () => {
  const [salons, setSalons] = useState<Salon[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortCriteria, setSortCriteria] = useState<"name" | "city" | null>(
      null
  );

  useEffect(() => {
    const fetchSalonsWithImages = async () => {
      try {
        const salonsResponse = await getSalons();
        const fetchedSalons = salonsResponse.data;

        const salonPromises = fetchedSalons.map(async (salon: any) => {
          try {
            const imageResponse = await getSalonImage(salon.id);
            return {
              ...salon,
              imageUrl: imageResponse.data[0]?.imageUrl || null,
            };
          } catch (error) {
            console.error(
                `Error fetching images for salon ${salon.id}:`,
                error
            );
            return { ...salon, imageUrl: null };
          }
        });

        const salonsWithImages = await Promise.all(salonPromises);
        setSalons(salonsWithImages);
      } catch (error) {
        console.error("Error fetching salons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalonsWithImages();
  }, []);

  const sortSalons = (criteria: "name" | "city") => {
    setSortCriteria(criteria);
    const sortedSalons = [...salons].sort((a, b) => {
      if (criteria === "name") {
        return a.salonName.localeCompare(b.salonName);
      }
      return a.city.localeCompare(b.city);
    });
    setSalons(sortedSalons);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div className="salon-list">
        <div className="sort-buttons">
          <button className="sort1" onClick={() => sortSalons("name")}>
            Sort by Name
          </button>
          <button className="sort1" onClick={() => sortSalons("city")}>
            Sort by City
          </button>
        </div>
        {salons.length === 0 ? (
            <p>No salons available.</p>
        ) : (
            salons.map((salon) => (
                <div key={salon.id} className="salon-card">
                  <h3 className="h3-color">{salon.salonName}</h3>
                  <p className="salon-city">{salon.city}, {salon.street} {salon.number}</p>
                  {salon.imageUrl ? (
                      <img
                          src={salon.imageUrl}
                          alt={`${salon.salonName} thumbnail`}
                          className="salon-image"
                      />
                  ) : (
                      <p>No image available</p>
                  )}
                  <Link className="salon-link" to={`/salons/${salon.id}`}>See Details</Link>
                </div>
            ))
        )}
      </div>
  );
};

export default header(SalonList, "Rezerwacje");