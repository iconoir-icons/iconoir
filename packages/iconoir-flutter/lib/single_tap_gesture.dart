import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SingleTapGesture extends StatelessWidget {
  const SingleTapGesture({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SingleTapGesture.svg');
}
