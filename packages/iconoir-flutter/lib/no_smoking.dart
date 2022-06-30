import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NoSmoking extends StatelessWidget {
  const NoSmoking({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NoSmoking.svg');
}
