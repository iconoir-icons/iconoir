import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CloudUpload extends StatelessWidget {
  const CloudUpload({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CloudUpload.svg');
}
