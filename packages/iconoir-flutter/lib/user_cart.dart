import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UserCart extends StatelessWidget {
  const UserCart({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/UserCart.svg');
}
