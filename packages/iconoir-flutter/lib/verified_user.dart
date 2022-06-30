import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VerifiedUser extends StatelessWidget {
  const VerifiedUser({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/VerifiedUser.svg');
}
