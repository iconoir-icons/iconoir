import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class User extends StatelessWidget {
  const User({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/User.svg');
}
