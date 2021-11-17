import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-profilemember',
  templateUrl: './profilemember.component.html',
  styleUrls: ['./profilemember.component.css']
})
export class ProfilememberComponent implements OnInit {

  constructor(
    private memberservice: MemberService,
    private _Activatedroute:ActivatedRoute) { }

  id:any
  member: any = {}

  ngOnInit(): void {
    this.getMember()
  }
  getMember(){
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.memberservice.getMember(this.id).subscribe(rs=>{
this.member=rs
console.log(this.member);

    })
  }

}
