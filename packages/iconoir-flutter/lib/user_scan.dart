import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UserScan extends StatelessWidget {
  const UserScan({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/UserScan.svg');
}
