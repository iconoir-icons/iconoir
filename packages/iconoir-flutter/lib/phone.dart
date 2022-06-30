import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Phone extends StatelessWidget {
  const Phone({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Phone.svg');
}
