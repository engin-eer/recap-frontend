import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalComponent } from '../rental/rental.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {

  carDetail:CarDetail;
  images:CarImage[];
  imageUrl = "https://localhost:44393/";

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private toastrService:ToastrService,
    )
  {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarDetails(carId:number)
  {
    this.carService.getCars(carId).subscribe(response => {
      this.car = response.data;
      console.log(response);
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
     this.images=response.data;
     console.log(response);
    })
     
  }

  getBack(){
    this.carService.getCars();
  }


  rent(carDetail:CarDetail){
   this.toastrService.success(carDetail.description,"Kiralandı");
    };
  
}